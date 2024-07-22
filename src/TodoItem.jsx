import React from "react";

function TodoItem(props) {
	const { todo, index, removeTodo } = props;
	
	return (
		<div>
			<span>{todo}</span>
			<button onClick={() => removeTodo(index)}>Done</button>
		</div>
	);
}

export default TodoItem;