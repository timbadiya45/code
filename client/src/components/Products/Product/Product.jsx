import "./Product.scss";
import { Link } from "react-router-dom";

import prod from "../../../assets/products/earbuds-prod-1.webp";
import { useApiContext } from "../../../utils/context";
import { useEffect, useState } from "react";
import { CgHeart} from "react-icons/cg";
import {FcLike} from "react-icons/fc";

const Product = ({ product }) => {
  const {likes, handleLikes, cart, handleCart} = useApiContext();

  const [checkLike, setLike] = useState(false);
  const [addCart, setAddCart] = useState(false);

  useEffect(() => {
    const checkLike = likes && likes.filter((item) => item.id === product.id);
    if(checkLike.length> 0)setLike(true);
    else setLike(false);

    const checkCart = cart && cart.filter((item) => item?.product?.id === product.id);
    if(checkCart.length> 0)setAddCart(true);
    else setAddCart(false);
  }, [
    checkLike, addCart
  ])
  
  const handlelike = () => {
   setLike(!checkLike);
   handleLikes(product);
  }

  const handlecart = () => {
    setAddCart(!addCart);
    handleCart(product);
  }

  return (
    // <Link className="product-link"  to={`/product/${product.id}`}>
      <div className="product-card">
        <div className="thumbnail">
          <img src={product.img} alt="" />
        </div>
        <div className="prod-details">
          <span className="name">{product.Product}</span>
          <span className="price">&#8377;{product.Price}</span>
          <button className="like" onClick={handlelike}>{checkLike? <FcLike />: <CgHeart />}</button>
          <button onClick={handlecart} >{addCart ? "remove": "add"}</button>
        </div>
      </div>
    // </Link>
  );
};

export default Product;
