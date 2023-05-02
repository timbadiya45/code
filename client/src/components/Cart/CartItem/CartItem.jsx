import { useState } from "react";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp";

import "./CartItem.scss";
const CartItem = ({product, numItems, reduceItem, increaseItem}) => {

  return (
    <div className="cart-products">
      <div className="cart-product">
        <div className="img-container">
          <img src={prod} alt="" />
        </div>
        <div className="prod-details">
            <span className="name">{product.Product}</span>
            <MdClose className="close-btn" />
            <div className="quantity-buttons">
                <span onClick={() => reduceItem(product, numItems)}>-</span>
                <span>{numItems}</span>
                <span onClick={() => increaseItem(product, numItems)}>+</span>
              </div>
              <div className="text">
                <span>{numItems}</span>
                <span>x</span>
                <span className="highlight">&#8377;{product.Price}</span>
              </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
