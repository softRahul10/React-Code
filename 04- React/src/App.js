import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import Demo from "./components/UI/Demo/Demo";

function App() {
  console.log("App Component");

  const [showPara, setShowPara] = useState(false);
  const [allow, setAllow] = useState(false);

  const clickHandler = useCallback(function () {
    if (allow) {
      setShowPara((prev) => {
        return !prev;
      });
    }
  }, [allow]);

  const allowHandler = () => {
    setAllow(true);
  };

  return (
    <div className='app'>
      <h1>Hi there!</h1>
      <Demo show={showPara} />
      <Button onClick={allowHandler}> Allow </Button>
      <Button onClick={clickHandler}> Toggle Paragraph </Button>
    </div>
  );
}

export default App;
