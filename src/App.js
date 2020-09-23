import React, {
  useState ,useEffect
} from 'react';
import Button from '@material-ui/core/Button';
import { FormControl, InputLabel , Input , List ,ListItem , ListItemText } from '@material-ui/core';
import db from "./firebase"
import firebase from "firebase";
import './App.css';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function App()
{

  const [todos, setTodods] = useState([]);
  const [input, setInput] = useState('');

// when the app loads we need too listen to the dtbase and fetch new todos as they get added/released

  useEffect(() => {
//this code here fires up when the app load
    
    db.collection('todos').orderBy('timestamp' , 'desc').onSnapshot(snapshot =>
    {
      // console.log(snapshot.docs.map(doc => doc.data().todo));
      setTodods(snapshot.docs.map(doc => ({ id: doc.id , todo: doc.data().todo })))
    });
    
  }, [input])


  function handleChange(event)
  {
    const typed = event.target.value;
    setInput(typed);
  }
  const addTodo = (event) =>
  {
    event.preventDefault(); //prevent default bahaviour of refreshing up!!


    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()  //just the server side work
    });
    setInput(''); //clear up the input after hitting the button
  }

  return(
    <div className="App">
      <h1>Hello my future !!</h1>
      <form>
        
        <FormControl>
          <InputLabel>Write a To-Do</InputLabel>
          <Input value={input} onChange={handleChange}></Input>
        </FormControl>
      <Button type="submit" disabled={!input} onClick={addTodo} variant="contained" color="primary">Add To-Do</Button>
       
      </form>
      <ul>
        {todos.map(note =>
        {
          return (
              <List>
              <ListItem>
                <ListItemText primary={note.todo} secondary="do this task.. ." />
              </ListItem>
              <DeleteForeverIcon onClick={event => db.collection('todos').doc(note.id).delete()}></DeleteForeverIcon>
             </List>
          );
        })
        }
      </ul>

  </div>
)
}

export default App;