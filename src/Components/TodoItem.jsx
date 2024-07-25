import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../store/slices/todoSlice";

function TodoItem(props) {
	const dispatch = useDispatch();
	const { todo } = props;

	return (
		<div className="todo-item">
			<span className="todo-text">{todo.content}</span>
			<button className="remove-todo-btn" onClick={() => dispatch(removeTodo(todo.id))}>Done</button>
		</div>
	);
}

export default TodoItem;