import "./Display.css";

function Display(props) {
  return (
    <div className="display">
      <div id="displaybar">{props.expression}</div>
    </div>
  );
}

export default Display;
