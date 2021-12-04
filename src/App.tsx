import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Uncontrolled from "./Uncontrolled";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Uncontrolled />
    </div>
  );
}

export default App;
