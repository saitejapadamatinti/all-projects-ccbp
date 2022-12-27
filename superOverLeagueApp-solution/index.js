const elementProp = { className: "greetings", children: "Hello World" };
const elementType = "h1";
const element = React.createElement(elementType, elementProp);

ReactDOM.render(element, document.getElementById("root"));
