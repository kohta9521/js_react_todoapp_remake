import React, {useState} from "react";
import "./style.css";

export const App = () => {
  const [imcompleteTodo, setImcompleteTodos] = useState([
    'サンプルです１',
    'サンプルです２'
  ]);

  const [completeTodos, setCompleteTodos] = useState([
    'サンプルです３'
  ])


  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>

      <div className="imcomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {imcompleteTodo.map((todo) => {
            return (
              <div key={todo} className="list-row">
              <li>{todo}</li>
              <button>完了</button>
              <button>削除</button>
            </div>
            )
          })}
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
              <li>{todo}</li>
              <button>戻す</button>
            </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};