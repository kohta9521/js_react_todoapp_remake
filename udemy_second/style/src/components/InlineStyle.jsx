export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px black",
    borderRadius: "20px",
    padding: "8px",
    margin: "8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  };
  const titleStyle = {
    margin: 0,
    color: "blue",
  };
  const buttonStyle = {};
  return (
    <div style={containerStyle}>
      <p style={titleStyle}>- Inline Styles -</p>
      <button style={buttonStyle}>Fight</button>
    </div>
  )
}