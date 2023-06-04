import { useDispatch } from 'react-redux';
import { toggleActions } from '../../store/toggle-cart';
import classes from './CartButton.module.css';
import { useSelector } from 'react-redux';

const CartButton = (props) => {

  const fn = useDispatch();
  const clickHandler = () => {
    fn(toggleActions.toggle());
  }
  let itemsInCart = useSelector(state=> state.cart.totalQuantity);
  return (
    <button className={classes.button} onClick={clickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemsInCart ? itemsInCart : 0}</span>
    </button>
  );
};

export default CartButton;
