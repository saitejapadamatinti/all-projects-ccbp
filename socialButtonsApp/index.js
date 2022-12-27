const Button = (props) => {
  const { className, buttonText } = props;
  return <button className={className}>{buttonText} </button>;
};

const element = (
  <div className="background-image">
    <div className="heading">
      <h1> Social Buttons </h1>
    </div>
    <div>
      <Button className="btn-1" buttonText="Like" />
      <Button className="btn-2" buttonText="Share" />
      <Button className="btn-3" buttonText="Subscribe" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
