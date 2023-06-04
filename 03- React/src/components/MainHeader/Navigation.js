import React, { useContext } from 'react';
import AuthContext from '../../context/auth-context';

import classes from './Navigation.module.css';

const Navigation = () => {
  const globalState = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {globalState.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {globalState.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {globalState.isLoggedIn && (
          <li>
            <button onClick={globalState.onLogOut}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
