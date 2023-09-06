import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import style from "./ItemDetail.module.css";

const ItemDetail = ({ name, price, img, stock, description }) => {
  const [quantity, setQuantity] = useState(0);

  const handleOnAdd = (quantity) => {
    console.log("se agrego " + quantity);
    setQuantity(quantity);
  };

  return (
    <div>
      <div className={style.detailContainer}>
        <h3 className={style.title}>{name}</h3>
        <img src={img} style={{ width: 100 }} />
        <h3>$ {price}</h3>
        <h3>{description}</h3>
        {quantity === 0 ? (
          <ItemCount stock={stock} onAdd={handleOnAdd} />
        ) : (
          <button>Finalizar compra</button>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
