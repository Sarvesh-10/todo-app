import React, { useState } from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    const textarea = document.querySelector('textarea');
    const todo = textarea.value;
    if (todo) setTodoList([...todoList, todo]);
    textarea.value = '';
  }

  return (
    <>
      <textarea placeholder='Todo Item'></textarea>
      <button onClick={addTodo}>Add</button>
      {todoList.map((todo, id) => <div key={id}>{todo}</div>)}
    </>
  );
}

export default App;
