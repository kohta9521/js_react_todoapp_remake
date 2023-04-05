import "./App.css";

function App() {
  const onClickUsers = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res);
    });
  };
  const onClickUser1 = () => {
    alert("user1");
  };
  return (
    <div className="App">
      <button onClick={onClickUsers}>Users</button>
      <button onClick={onClickUser1}>id=1のユーザー</button>
    </div>
  );
}

export default App;
