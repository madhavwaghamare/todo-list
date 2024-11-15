import React from "react";

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
    return (
        <li
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
                borderBottom: "1px solid #ddd",
            }}
        >
            <span
                onClick={() => toggleComplete(todo.id)}
                style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                    cursor: "pointer",
                }}
            >
                {todo.text}
            </span>
            <button
                onClick={() => deleteTodo(todo.id)}
                style={{
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    cursor: "pointer",
                }}
            >
                Delete
            </button>
        </li>
    );
};

export default TodoItem;
