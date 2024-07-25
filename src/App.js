import React from 'react'
import './App.css'
import TodoList from './Components/TodoList';
import { useDispatch } from 'react-redux';
import { addTodo } from './store/slices/todoSlice';

function App() {
  const dispatch = useDispatch();
  const addTodoHandler = () => {
    const todoInput = document.querySelector('.todo-input');
    if (todoInput.value.trim() === '') {
      return;
    }
    const todoItem = todoInput.value;
    todoInput.value = '';
    dispatch(addTodo({ id: Date.now(), content: todoItem }));
  }

  return (
    <>
      <textarea className="todo-input" placeholder="Todo Item"></textarea>

      <button className="add-todo-btn" onClick={() => addTodoHandler()}>Add</button>

      <TodoList />
    </>
  );
}
export default App;
