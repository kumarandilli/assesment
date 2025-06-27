import React, { useState } from "react";

function App() {
  
  const [todos, setTodos] = useState([]);

  const [inputValue, setInputValue] = useState("");

  
  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Todo App</h2>
      <div>
        <input
          type="text"
          placeholder="Enter todo..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px"
            }}
          >
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
