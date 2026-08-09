import React, { useState , useEffect } from "react";
import Home from "./components/Home";
import About from "./components/About";
import interval from "./components/About";
import axios from "axios";

const App = () => {
  const [count, setCount] = useState(0);
const [toggle,setToggle ] = useState(true);
const [apiData ,setApiData] = useState(null
);
let fn = async () => {
  let item = await axios.get("https://fakestoreapi.com/products")
  setApiData(apiData)
  console.log(item.data)
}
useEffect(() => {
  fn()
},[])



console.log("App is rendering")
  return (
   <div>
     <h1>This is the App component</h1>
    {
      toggle ? (<Home toggle={toggle}/>) : (<About toggle/>)
    }
     <h1>This is {count}</h1>
     <button onClick={() => setCount(count + 1)}>
       Increment Count
     </button>
      <button onClick={() => setToggle(!toggle)}>
       Toggle Component
     </button>
     </div>
  )
}


export default App;
