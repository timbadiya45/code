import "./Products.scss";
import Product from "./Product/Product";

const Products = () => {
    return (
        <div className="products-container">
            <div className="sec-heading">Section Heading</div>
            <div className="products">
            <Product thumbnail={"fkjs"} prodDetails={"kfsjd"}/>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            </div>
        </div>

    );
};

export default Products;
