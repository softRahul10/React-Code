import { useContext } from "react";
import CartContext from "../../store/cart-context";

import CartIcon from "../Cart/CartIcon";
import styleObject from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);
  return (
    <button className={styleObject.button} onClick={props.open}>
      <span className={styleObject.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styleObject.badge}> {numberOfItems} </span>
    </button>
  );
};

export default HeaderCartButton;
