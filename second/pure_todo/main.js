const onClickAdd = () => {
  // テキストボックの値を取得し初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // divの生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liの生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // button完了タグの生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  // button削除タグの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  // divの子要素にliを挿入
  div.appendChild(li);
  console.log(div);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
