import classes from "./Button.module.css";
export default function Button(props) {
  return (
    <button
      className={classes.btn}
      type={!props.type ? "button" : props.type}
      onClick={props.onClick}>
      {props.children}
    </button>
  );
}
