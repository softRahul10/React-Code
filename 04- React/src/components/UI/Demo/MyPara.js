const MyPara = (props) => {
  console.log('My para Component');
  return <p> {props.children} </p>;
};

export default MyPara;
