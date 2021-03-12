import "./Button.css";

function Button(props) {
  return (
    <button className="calc-btn" onClick={props.btnPressed}>
      {props.label}
    </button>
  );
}

export default Button;
