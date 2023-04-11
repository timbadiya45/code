import "./Product.scss";

const Product = ({thumbnail, prodDetails}) => {
    return ( <div className="product-card">
        <div className="thumbnail">{thumbnail}</div>
        <div className="prod-details">{prodDetails}</div>
    </div>
    );
};

export default Product;
