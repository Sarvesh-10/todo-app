import React from "react";

function TodoItem(props) {
	const { todo, index, removeTodo } = props;
	
	return (
		<div className="todo-item">
            <span className="todo-text">{todo}</span>
            <button className="remove-todo-btn" onClick={() => removeTodo(index)}>Done</button>
        </div>
	);
}

export default TodoItem;