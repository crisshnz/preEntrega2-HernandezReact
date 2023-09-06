import React from "react";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import style from "./CartWidget.module.css";

export const CartWidget = () => {
  return (
    <button className={style.shoppingCart}>
      <ShoppingCart fontSize="large" /> 0
    </button>
  );
};
