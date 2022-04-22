import classes from "./HeaderCartButton.module.css";
import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";

import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
