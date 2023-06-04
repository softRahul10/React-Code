import { createPortal } from "react-dom";
import React from "react";
import classes from "./Modal.module.css";
import Button from "./UI/Button";

function Modal(props) {
  const ele = (
    <div className={classes.modal}>
      <div className={classes['modal-content']}>
        <div className='modal-title'>
          <h2>Invalid Input</h2>
        </div>
        <div className='modal-text'>
          <p>{props.text}</p>
        </div>
        <div className='modal-button'>
          <Button onClick={()=>{props.fn(prev=>!prev)}}>
          Ok
          </Button>
        </div>
      </div>
    </div>
  );
  return createPortal(ele, document.getElementById("modal"));
}

export default Modal;
