import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Root from "./pages/Root";
import Error from "./pages/Error";
import ProductDetails from "./pages/ProductDetails";
import Demo from "./pages/Demo";

// 1. way
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: "", element: <Home /> },
      { path: "products", element: <Product /> },
      { path: "products/:productId", element: <ProductDetails /> },
      { path: "products/:productId/buy/:buyItem", element: <Demo /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

/* Alternate way of creating Routes */
// 2. way
// const paths = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<Home/>}/>
//     <Route path='/about' element={<About/>}/>
//   </Route>
// );
//const router2 = createBrowserRouter(router);
