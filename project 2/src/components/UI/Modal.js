/* If components are closely related
   and You don't want to create 
   new files for them
 */
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.close} ></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalContainer = document.getElementById("modal");
const Modal = (props) => {
  return (
    <>
      {createPortal(<BackDrop close={props.close} />, portalContainer)}
      {createPortal(
        <ModalOverlay> {props.children} </ModalOverlay>,
        portalContainer
      )}
    </>
  );
};

export default Modal;
