export const Practice4 = () => {
  const onClickPractice = () => calcTotalFee(1000);
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  }

  return (
    <div>
      <p>練習問題: 設定ファイルを弄る</p>
      <button onClick={onClickPractice}>
        練習問題4を実行
      </button>
    </div>
  )
}