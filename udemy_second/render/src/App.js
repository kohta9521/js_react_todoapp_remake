import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={countUp}>Count Up</button>
    </div>
  );
}

export default App;
