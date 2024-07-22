import React, { useState } from 'react'
import TodoItem from './TodoItem'

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
      <textarea placeholder="Todo Item"></textarea>
      <button onClick={addTodo}>Add</button>
      <div>
        {
          todoList.map((todo, index) => {
            return <TodoItem todo={todo} index={index} removeTodo={removeTodo} key={index} />
          })
        }
      </div>
    </>
  );
}
export default App;
