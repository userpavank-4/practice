const Notification = (props) => {
  const { className, image, message } = props;
  return (
    <li className={className}>
      <img src={image} alt="img" />
      <p>{message}</p>
    </li>
  );
};

const element = (
  <div>
    <h1>Notification</h1>
    <ul>
      <Notification
        className="box-1"
        image="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        message="Information Message"
      />
      <Notification
        className="box-2"
        image="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        message="Success Message"
      />
      <Notification
        className="box-3"
        image="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        message="Warning Message"
      />
      <Notification
        className="box-4"
        image="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        message="Danger Message"
      />
    </ul>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
