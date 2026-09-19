import React from "react";

function App() {
  const heading = "Writing Markup with JSX";
  const message = "JSX allows us to write HTML inside JavaScript.";

  const features = [
    "Easy to read",
    "Looks like HTML",
    "Used in React components"
  ];

  return (
    <div>
      <h1>{heading}</h1>

      <h2 style={{ color: "blue" }}>Welcome to JSX</h2>

      <p>{message}</p>

      <ul>
        {features.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;