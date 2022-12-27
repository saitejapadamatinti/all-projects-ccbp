const element = (
  <div className="background-container">
    <h1> Congratulations </h1>
    <div className="image-div">
      <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" />
      <h1 className="heading"> Kiran V </h1>
      <p> Vishnu Institute of Computer Education and Techonology, Bhimavaram</p>
      <img
        className="image-2"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
