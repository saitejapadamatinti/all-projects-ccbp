const Box = (props) => {
  //  Write your code here.
  const { textContent, boxOne } = props;
  return <div className={boxOne}>{textContent}</div>;
};

const element = (
  //  Write your code here.
  <div className="main-div">
    <div>
      <h1>Boxes</h1>
    </div>
    <div>
      <Box textContent="Small" boxOne="box-1 box" />
      <Box textContent="Medium" boxOne="box-2 box" />
      <Box textContent="Large" boxOne="box-3 box" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
