import { Component } from 'react';
import Users from './Users';
import classes from './UserFinder.module.css';
import ErrorBoundary from './ErrorBoundary';

const DUMMY_USERS = [
      { id: 'u1', name: 'Max' },
      { id: 'u2', name: 'Manuel' },
      { id: 'u3', name: 'Julie' },
];

// class Component
class UserFinder extends Component {

      //Birth's 1.Constructor 
      constructor() {
            super();
            this.state = {
                  filteredData: DUMMY_USERS,
                  searchQuery: '',
            };
      }

      //Birth's 2. getDerivedStateFromProps()

      searchChangeHandler = (event) => {
            this.setState({ searchQuery: event.target.value });
      }

      //Birth's 4. componentDidMount()
      componentDidUpdate = (prevProps, prevState) => {
            if (prevState.searchQuery !== this.state.searchQuery) {
                  this.setState({
                        filteredData: DUMMY_USERS.filter(user => user.name.includes(this.state.searchQuery))
                  });
            }
      }

      //Birth's 3. render()
      render() {
            return (
                  <div className={classes.finder}>
                        <input type='search' onChange={this.searchChangeHandler} />
                        <ErrorBoundary>
                              <Users users={this.state.filteredData} />
                        </ErrorBoundary>
                  </div>
            );
      }
}

export default UserFinder

// // functional component
// const UserFinder = () => {
//       //   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//       //   const [searchTerm, setSearchTerm] = useState('');

//       useEffect(() => {
//             setFilteredUsers(
//                   DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//             );
//       }, [searchTerm]);

//       // const searchChangeHandler = (event) => {
//       //       setSearchTerm(event.target.value);
//       // };

//       return (
//             <div className={classes.finder}>
//                   <input type='search' onChange={searchChangeHandler} />
//                   <Users users={filteredUsers} />
//             </div>
//       );
// };