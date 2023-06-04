import React from "react";
import { useParams } from 'react-router-dom';
function Demo() {
      const obj = useParams();
      console.log(obj);
      return <h1>Buy Page for product {obj.productId}, {obj.buyItem}</h1>
}

export default Demo;