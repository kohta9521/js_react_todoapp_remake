import { useState } from 'react';
import './App.css';
import axios from 'axios';

import {Todo } from './Todo';
import {TodoType} from "./types/todo"
import { Text } from './Text';



function App() {
  const [ todos, setTodos ] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
    .then((res) => {
      res.data.map((todo) => todo.title);
      setTodos(res.data);
    });
  };

  return (
    <div className="App">
      <Text color='red' fontSize='18px' />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo 
        key={todo.Id}
        title={todo.title} 
        userId={todo.userId} 
        completed={todo.completed}
        />
      ))}
    </div>
  );
}

export default App;
