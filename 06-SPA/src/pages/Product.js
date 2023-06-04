import { Link } from "react-router-dom";
const PRODUCTS = [
      {id:'p1', title:'Title One'},
      {id:'p2', title:'Title Two'},
      {id:'p3', title:'Title Three'},
];
function Product() {
      return (
      <>
            <h1>Product Page</h1>
            <ul>
                  {PRODUCTS.map(ele=>{
                        return (
                              <li key={ele.id}>
                                    <Link to={`/products/${ele.id}`}>
                                         {ele.title}
                                    </Link>
                              </li>
                        );
                  })}
            </ul>
      </>
      );
}

export default Product;