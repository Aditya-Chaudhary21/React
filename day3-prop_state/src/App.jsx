import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
const App = () => {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(true);
  console.log(flag);
  console.log(count);
  return (
    <div>
      <h1>Count is- {count}</h1>
      <h2>Show flag is - {String(flag)}</h2>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setFlag(false);
        }}
      >
        Change flag
      </button>
    </div>
  );
};

export default App;
