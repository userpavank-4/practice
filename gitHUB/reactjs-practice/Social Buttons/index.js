const Button = (props) => {
  const { buttonText, className } = props;
  return <button className={className}>{buttonText}</button>;
};

const element = (
  <div>
    <h1>Social Buttons</h1>
    <div>
      <Button buttonText="like" className="like-button" />
      <Button buttonText="comment" className="comment-button" />
      <Button buttonText="share" className="share-button" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
