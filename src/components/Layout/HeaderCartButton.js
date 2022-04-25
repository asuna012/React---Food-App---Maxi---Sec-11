import classes from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";

import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const [btnIsHighlighted, setbtnIsHighlighted] = useState(false);

  const btnClasses = `${classes.button}  ${
    btnIsHighlighted ? classes.bump : null
  }  `;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setbtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setbtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  const numCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
