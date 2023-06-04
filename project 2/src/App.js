import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const cartOpenHandler = () => {
    setCartIsShown(true);
  };
  const cartCloseHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart close={cartCloseHandler} />}
      <Header open={cartOpenHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
