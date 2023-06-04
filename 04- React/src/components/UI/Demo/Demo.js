import React, { memo } from "react";
import MyPara from "./MyPara";

const Demo = (props) => {
  console.log('Demo Component');
  return <MyPara> {props.show ? "This is a para" : ""} </MyPara>;
};

export default memo(Demo);
