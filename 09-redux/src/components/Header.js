import classes from './Header.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { authAction } from '../store/index';

const Header = () => {

  const data = useSelector(state=>state.auth.isAuthenticated);
  const fn = useDispatch();
  function logout() {
      fn(authAction.logout());
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          {!data && ''}
          {data &&
          <li>
            <button onClick={logout}>Logout</button>
          </li>
          }  
        </ul>
      </nav>
    </header>
  );
};

export default Header;
