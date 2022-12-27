const Notification = (props) => {
  //  Write your code here.
  const { className, imgclass, imgurl, textContent } = props;
  return (
    <div className={className}>
      <img src={imgurl} className={imgclass} />
      <p>{textContent}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="conat">
    <div className="main-container">
      <h1> Notifications </h1>
      <Notification
        className="notification-1 notification"
        imgclass="img-1"
        imgurl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        textContent="Information"
      />
      <Notification
        className="notification-2 notification"
        imgclass="img-1"
        imgurl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        textContent="Information"
      />
      <Notification
        className="notification-3 notification"
        imgclass="img-1"
        imgurl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        textContent="Information"
      />
      <Notification
        className="notification-4 notification"
        imgclass="img-1"
        imgurl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        textContent="Information"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
