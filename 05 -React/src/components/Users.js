import React,{Component} from 'react';
import User from './User';
import classes from './Users.module.css';

// classical component
class Users extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showUsers: true,
      more: 'test',
    }; // state initialized
  }

  componentDidUpdate() {
    if(this.props.users.length === 0) {
      throw new Error('Error: No users');
    }
  }

  // event handlers
  toggleUsersHandler() {
    this.setState((prevState)=> {
      return {
        showUsers: !prevState.showUsers,
      };
    });
  }

  // rendering code
  render() {

    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }

}

export default Users;


// functional component
// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };
