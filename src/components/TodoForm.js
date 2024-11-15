import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(task);
        setTask(""); // Clear the input field
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter a task..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
                style={{
                    padding: "10px",
                    width: "70%",
                    marginRight: "10px",
                    border: "1px solid #ddd",
                }}
            />
            <button
                type="submit"
                style={{
                    padding: "10px 15px",
                    backgroundColor: "#007BFF",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                }}
            >
                Add
            </button>
        </form>
    );
};

export default TodoForm;
