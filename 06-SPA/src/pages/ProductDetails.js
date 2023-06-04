import React from 'react';
import { Link, useParams } from 'react-router-dom';

function ProductDetails() {
  const obj = useParams();
  return (
    <>
      <h1>Product Details Page of {obj.productId} </h1>
      <Link to=".." relative='path'> Go Back </Link>
    </>

  )
}

export default ProductDetails