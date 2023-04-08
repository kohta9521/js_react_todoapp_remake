export const Practice1 = () => {
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  }

  const onClickPractice = () => [
    console.log(getTotalFee(1000))
  ]
  return (
    <div>
      <p>練習問題: 引数の型指定</p>
      <button onClick={onClickPractice}>
        練習問題1を実行
      </button>
    </div>
  )
}