import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function TodoList() {
    const todoList = useSelector((state) => state.todo.list);
    return (
        <div className="todo-list">
            {
                todoList.map((todo) => (
                    <TodoItem todo={todo} key={todo.id} />
                ))
            }
        </div>
    );
}