import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import { useEffect, useState } from "react";

import CartItem from "./CartItem/CartItem";

import "./Cart.scss";
import { useApiContext } from "../../utils/context";

const Cart = ({ setShowCart }) => {
  const { cart, setCart } = useApiContext();

  const [cartData, setCartData] = useState(cart);
  const [total, setTotal] = useState(0);

  const findTotal = (cartAdded) => {
    let totalAmount = 0;
    cartAdded && cartAdded.forEach(element => {
      totalAmount= totalAmount+ (Number(element?.numItems) * Number(element?.product?.Price));
    });
    setTotal(totalAmount);
  }

  const reduceItem = (product, numItems) => {
    if (numItems > 0) {
      const copyCart = [...cart];
      const filter =
        copyCart && copyCart.filter((item) => item?.product?.id === product.id);
      if (filter.length > 0 && numItems > 1) {
        const ans = {
          numItems: filter[0]?.numItems - 1,
          product: filter[0]?.product,
        };
        const newCart =
          copyCart &&
          copyCart.filter((item) => item?.product?.id !== product.id);
        const result = [...newCart, ans];
        setCart(result);
        setCartData(result);
        findTotal(result);
      } else {
        const newCart =
          copyCart &&
          copyCart.filter((item) => item?.product?.id !== product.id);
        setCart([...newCart]);
        setCartData([...newCart]);
        findTotal(newCart);
      }
    }
  };

  const increaseItem = (product, numItems) => {
    const copyCart = [...cart];
    const filter =
      copyCart && copyCart.filter((item) => item?.product?.id === product.id);
    const ans = {
      numItems: filter[0]?.numItems + 1,
      product: filter[0]?.product,
    };
    const newCart =
      copyCart && copyCart.filter((item) => item?.product?.id !== product.id);
    const result = [...newCart, ans];
    setCart(result);
    setCartData(result);
    findTotal(result);
  };

  useEffect(() => {
    if(cart.length){
       findTotal(cart);
    }
  }, []);

  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
          </span>
        </div>
        {/*<div className="empty-cart">
            <BsCartX />
            <span>No Products in the Cart.</span>
            <button className="return-cta">RETURN TO SHOP</button>
  </div> */}
        <>
          {cartData &&
            cartData.map((item) => (
              <CartItem
                product={item.product}
                numItems={item.numItems}
                reduceItem={reduceItem}
                increaseItem={increaseItem}
              />
            ))}
          <div className="cart-footer">
            <div className="subtotal">
              <span className="text">Subtotal</span>
              <span className="text total">&#8377;{total}</span>
            </div>
            <div className="button">
              <button className="checkout-cta">checkout</button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Cart;
