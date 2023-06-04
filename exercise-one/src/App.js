import Form from "./components/Form";
import List from "./components/List";
import './App.css';
import { useState } from "react";

const initialData = [
  {
    name:'Rahul Keshri',
    age:25,
  },
  {
    name:'Gautam Keshri',
    age:20,
  }
];

function App() {
  const [data,setData] = useState(initialData);
  return (
    <div className="app">
      <Form value={data} updateValue={setData} />
      <List value={data} />
    </div>
  );
}

export default App;
