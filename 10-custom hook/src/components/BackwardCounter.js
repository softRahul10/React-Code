import { useState, useEffect } from 'react';

import Card from './Card';

const BackwardCounter = () => {
  const [counter, setCounter] = useState(0);
  // console.log('Backwarding');
  useEffect(() => {
//    console.log('Backwarding Effect');
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
