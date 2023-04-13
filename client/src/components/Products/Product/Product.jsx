import "./Product.scss";

import prod from "../../../assets/products/earbuds-prod-1.webp";

const Product = ({thumbnail, prodDetails}) => {
    return ( <div className="product-card">
        <div className="thumbnail">
            <img src={prod} alt="" />
            </div>
        <div className="prod-details">
            <span className="name">Lavender Essential Oil</span>
            <span className="price">&#8377;499</span>
        </div>
    </div>
    );
};

export default Product;
