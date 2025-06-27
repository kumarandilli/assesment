import React, { useState } from "react";

// 1. Counter Component
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>1. Counter</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}

// 2. Toggle Message Component
function ToggleMessage() {
  const [message, setMessage] = useState("Hello");

  const toggle = () => {
    setMessage((prev) => (prev === "Hello" ? "Welcome Back" : "Hello"));
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>2. Toggle Message</h3>
      <p>{message}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

// 3. Parent and Child Component
function ChildComponent({ message }) {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

function ParentComponent() {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>3. Parent ➝ Child</h3>
      <ChildComponent message="Good morning" />
    </div>
  );
}

// 4. GrandParent ➝ Parent ➝ Child
function Child({ message }) {
  return <p>{message}</p>;
}

function Parent({ message }) {
  return <Child message={message} />;
}

function GrandParent() {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>4. GrandParent ➝ Parent ➝ Child</h3>
      <Parent message="Hello from GrandParent" />
    </div>
  );
}

// 5. Render List of Names
function NameList() {
  const names = ["John", "Jane", "Alex"];
  return (
    <div>
      <h3>5. Name List</h3>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

// Main App Component
function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <Counter />
      <ToggleMessage />
      <ParentComponent />
      <GrandParent />
      <NameList />
    </div>
  );
}





// 




export default App;
