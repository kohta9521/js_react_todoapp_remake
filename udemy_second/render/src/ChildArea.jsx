const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "red"
};


export const ChildArea = (props) => {
  const {open} = props;
  console.log('childareaがレンダリングされました')

  const data = [ ...Array(2000).keys()]
  data.forEach(() => {
    console.log("...");
  })
  console.log(data);

  return (
    <>
    {open ? (
            <div>
            <p>子コンポーネント</p>
          </div>
    ) : null}
    </>
  )
}
