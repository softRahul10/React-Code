import { Component } from 'react';
import classes from './User.module.css';

// classical Component
class User extends Component {
  render() {
    return <li className={classes.user}>{this.props.name}</li>; 
  }
}

export default User;

// functional Component
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };