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
const SingleProduct = () => {
  const [productData, setProductData] = useState({});
  const { data, getParticularData } = useApiContext();
  const params = useParams();

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
                <span>-</span>
                <span>5</span>
                <span>+</span>
              </div>
              <button className="add-to-cart-button">
                <FaCartPlus size={20} />
                ADD TO CART
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
