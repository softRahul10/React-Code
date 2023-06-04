import React, { useState , useEffect ,useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state,action)=> {
  
  if(action.type === 'User_Input') return {value:action.val,isValid:action.val.includes('@')};
  if(action.type === 'Email_Entered') {
      return {value:state.value,isValid:state.value.includes('@')};
  }

  return {
    value:'',
    isValid:false
  }
}

// password reducer
const passwordReducer = (state,action) => {
  if(action.type === 'Password is entering') {
    return {password:action.value,isValid:action.value.trim().length > 6};
  }else if(action.type === 'Check password') {
    return {password:state.password,isValid:state.password.trim().length > 6};
  }
  return {password:'',isValid:false};
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);


  // More complex state management in react using useReducer
  const [emailState, dispatchEmail] = useReducer(emailReducer,{value:'',isValid:null});

  // password
  const [passwordState,dispatchPassword] = useReducer(passwordReducer,{password:'',isValid:null});
  


  // useEffect(()=> {

  //   console.log('Special UseEffect');

  // });

  const {isValid:emailValid} = emailState;
  const {isValid:passwordValid} = passwordState;


  useEffect(()=> {
    // DeBounce
    const id = setTimeout(()=> {
    setFormIsValid(
      emailValid && passwordValid 
    );
    //console.log('Form validated');
    },100);
    console.log('useEffect');


    // useEffect clean up function
    return () => {
      //console.log('Clean up');
      clearTimeout(id);
    };

  },[emailValid,passwordValid])

  const emailChangeHandler = (event) => {
    dispatchEmail({type:'User_Input',val:event.target.value});
    // setFormIsValid(
    //    //event.target.value.includes('@') && enteredPassword.trim().length > 6
    //    event.target.value.includes('@') && passwordState.isValid
    //   );
  };

  const passwordChangeHandler = (event) => {
    //setEnteredPassword(event.target.value);
    dispatchPassword({type:'Password is entering',value:event.target.value});
    //  setFormIsValid(
    //   emailState.isValid && event.target.value.trim().length > 6
    //   //emailState.isValid && passwordState.password.trim().length > 6
    //   );
  };

  const validateEmailHandler = () => {
    dispatchEmail({type:'Email_Entered'})
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type:'Check password'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.isValid, passwordState.isValid);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
           passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.password}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
