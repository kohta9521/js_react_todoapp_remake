import React, {useState} from "react";
import "./style.css";
import { InputTodo } from "./components/InputTodo";

export const App = () => {
  const [todoText, setTodoText] = useState('')
  const [imcompleteTodos, setImcompleteTodos] = useState([

  ]);

  const [completeTodos, setCompleteTodos] = useState([
    
  ])

  const onChangeTodoText = (e) => {
    setTodoText(e.target.value);
  }

  const onClickAdd = () => {
    if (todoText === '') return;
    const newTodos = [...imcompleteTodos, todoText];
    setImcompleteTodos(newTodos);
    setTodoText("");
  }

  const onClickDelete = (index) => {
    const newTodos = [...imcompleteTodos];
    newTodos.splice(index, 1);
    setImcompleteTodos(newTodos)
  }

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...imcompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, imcompleteTodos[index]]
    setImcompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...imcompleteTodos, completeTodos[index]]
    setCompleteTodos(newCompleteTodos);
    setImcompleteTodos(newIncompleteTodos);
  }

  return (
    <>
      <InputTodo todoText={todoText} onChange={onChangeTodoText}  onClick={onClickAdd} />
      <div className="imcomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {imcompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
            )
          })}
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
