import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import NewTodoForm from './Components/NewTodoForm';
import { addTodo } from './Store/todoSlice';

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
