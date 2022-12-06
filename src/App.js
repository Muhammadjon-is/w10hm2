import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import NewTodoForm from './Components/NewTodoForm';
import { addTodo } from './Store/todoSlice';

// When you add smth it will be saved and you can see.Important thing now I  understand what I'm doing. Without any Copy Paste


function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAction = () => {
    if(text.trim().length) {
      dispatch(addTodo({text}))
      setText('')
    }
  }
  return (
    <div className="App">
     <h1>Welcome redux Persist</h1>
     <NewTodoForm
      value={text}
      updateText={setText}
      handleAction={handleAction}
     >

     </NewTodoForm>
    </div>
  );
}

export default App;
