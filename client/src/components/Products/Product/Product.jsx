import "./Product.scss";
import { Link } from "react-router-dom";

import prod from "../../../assets/products/earbuds-prod-1.webp";

const Product = ({ product }) => {
  return (
    // <Link className="product-link"  to={`/product/${product.id}`}>
      <div className="product-card">
        <div className="thumbnail">
          <img src={product.img} alt="" />
        </div>
        <div className="prod-details">
          <span className="name">{product.Product}</span>
          <span className="price">&#8377;{product.Price}</span>
        </div>
      </div>
    // </Link>
  );
};

export default Product;
