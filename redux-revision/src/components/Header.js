import classes from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../store/auth';
const Header = () => {
  const dispatch = useDispatch();
  const loginStatus = useSelector(state=>state.auth.isLogin);
  const logOutHandler = ()=> {
    dispatch(loginActions.logOut());
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
      { loginStatus && 
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logOutHandler}>Logout</button>
          </li>
        </ul>
      }
      </nav>
    </header>
  );
};

export default Header;
