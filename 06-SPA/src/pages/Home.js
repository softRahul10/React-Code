import React, { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';

function Home() {
      const navigate = useNavigate();
      const backToHome = ()=> {
            navigate('/');
      }
      useEffect(()=>{
           backToHome();
      },[])
      return (
            <React.Fragment>
                  <h1>Home Page</h1>
                  <div>
                        Go to <Link to="/products"> Product Page </Link>
                  </div>
            </React.Fragment>
      );
}

export default Home;