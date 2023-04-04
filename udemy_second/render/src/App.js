import { useState } from "react";
import "./App.css";
import { ChildArea } from "./ChildArea";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onClickOpen = () => {
    setOpen(!open);
  };

  // const countUp = () => {
  //   setCount(count + 1);
  // };

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} />
    </div>
  );
}

export default App;
