import { useState } from "react";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { useParams } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";

import prod from "../../assets/products/earbuds-prod-1.webp";

import "./SingleProduct.scss";
import { useEffect } from "react";
import { useApiContext } from "../../utils/context";
import { BsFillCartDashFill } from "react-icons/bs";

const SingleProduct = () => {
  const [productData, setProductData] = useState({});
  const { data, getParticularData, cart, handleCart } = useApiContext();
  const [addCart, setAddCart] = useState(false);
  const [numItems, setNumItems] = useState(1);

  const params = useParams();

  useEffect(() => {
    const checkCart = cart && cart.filter((item) => item?.product?.id === productData.id);
    if(checkCart.length> 0){
      setAddCart(true);
      setNumItems(checkCart.numItems)
    }
    else setAddCart(false);
  }, [
     addCart
  ])

  useEffect(() => {
    async function fetchData() {
    const ans = await getParticularData(params.id);
    console.log(ans);
    if(ans){
    setProductData(ans[0]);
    }
    }
    fetchData();
  }, []);

  const handlecart = () => {
    setAddCart(!addCart);
    handleCart(productData);
  }

  const addItem = () => {
    setNumItems(numItems+1);
  }

  const reduceItem = () => {
    if(numItems> 0)
    setNumItems(numItems-1);
  }


  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={productData.img || prod} alt="" />
          </div>
          <div className="right">
            <span className="name">{productData.Product}</span>
            <span className="price">{productData.Price}</span>
            <span className="desc">{productData.Description}</span>

            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={reduceItem}>-</span>
                <span>{numItems}</span>
                <span onClick={addItem}>+</span>
              </div>
              <button className={!addCart ? "add-to-cart-button": ""} onClick={handlecart}>
                {addCart ? (<>
                <BsFillCartDashFill /> Remove from Cart
                </>): (<><FaCartPlus size={20} />
                ADD TO CART</>)}
              </button>
            </div>
            <span className="divider" />
            <div className="info-item" />
            <span className="text-bold">
              Category:
              <span>Essential Oil</span>
            </span>
            <span className="text-bold">
              Share:
              <span className="social-icons">
                <FaFacebookF size={16} />
                <FaTwitter size={16} />
                <FaInstagram size={16} />
                <FaLinkedinIn size={16} />
                <FaPinterest size={16} />
              </span>
            </span>
          </div>
        </div>
        <RelatedProducts />
      </div>
    </div>
  );
};

export default SingleProduct;
