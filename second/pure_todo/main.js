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
  completeButton.addEventListener("click", () => {
    // 完了しるとに追加する要素
    const addTerget = completeButton.parentNode;

    //! todo内容テキストを取得
    const text = addTerget.firstElementChild.innerText;

    console.log(text);
    // 完了ボタンの挙動
    deleteFromIncompleteList(completeButton.parentNode);
  });

  // button削除タグの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 削除ボタンの親タグ</div>を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // divの子要素にliを挿入
  div.appendChild(li);
  console.log(div);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);

  // 完了エリアへ移動
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
