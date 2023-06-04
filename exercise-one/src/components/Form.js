import { useState } from "react";
import classes from "./Form.module.css";
import Modal from "./Modal";
import Card from "./UI/Card";
import Button from "./UI/Button";

function Form(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [hideModal, setHideModal] = useState(true);

  function nameInputHandler(event) {
    setName(event.target.value);
  }
  function ageInputHandler(event) {
    setAge(event.target.value);
  }
  function formValidation() {
    let reason = "";
    if (name.trim().length === 0 || age.trim() === 0) {
      reason = "Empty name or age";
      return {
        status:false,
        value:reason
      };
    } else if (+age <= 0) {
      reason = "Age must be greater than 0";
      return {
        status:false,
        value:reason,
      }
    }
    return {
      status:true,
      value:""
    };
  }

  function submitHandler(event) {
    event.preventDefault();
    let result = formValidation();
    if (result.status === true) {
      const temp = {
        name,
        age,
      };
      // props.updateValue([temp,...props.value]);
      props.updateValue((prev)=> {
        return [temp,...prev]
      })
      setName("");
      setAge("");
    } else {
      setHideModal(false);
    }
  }

  return (
    <Card>
      {!hideModal && <Modal fn={setHideModal} text={formValidation().value} />}
      <form onSubmit={submitHandler}>
        <div className={classes["form-controls"]}>
          <div className={classes["form-control"]}>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              id='username'
              name='username'
              value={name}
              onChange={nameInputHandler}
            />
          </div>
          <div className={classes["form-control"]}>
            <label htmlFor='age'>Age</label>
            <input
              type='number'
              id='age'
              name='age'
              value={age}
              onChange={ageInputHandler}
            />
          </div>
        </div>
        <div className={classes["form-action"]}>
         <Button type="submit">
          Add user
         </Button>
        </div>
      </form>
    </Card>
  );
}

export default Form;
