export const Practice2 = () => {
  const onClickPractice = () => calcTotalFee(1000);
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  }

  return (
    <div>
      <p>練習問題: 返却値の型指定</p>
      <button onClick={onClickPractice}>
        練習問題2を実行
      </button>
    </div>
  )
}