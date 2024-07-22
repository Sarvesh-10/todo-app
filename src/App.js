import React, { useState } from 'react'
import TodoItem from './TodoItem'
import './App.css'

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    const textarea = document.querySelector('textarea');
    const todo = textarea.value;
    if (todo) setTodoList([...todoList, todo]);
    textarea.value = '';
  }

  const removeTodo = (index) => {
    const newTodoList = todoList.filter((todo, i) => i !== index);
    setTodoList(newTodoList);
  }

  return (
    <>
      <textarea className="todo-input" placeholder="Todo Item"></textarea>

      <button className="add-todo-btn" onClick={addTodo}>Add</button>

      <div className="todo-list">
        {
          todoList.map((todo, index) => (
            <TodoItem todo={todo} index={index} removeTodo={removeTodo} key={index} />
          ))
        }
      </div>
    </>
  );
}
export default App;
