import "./Products.scss";
import Product from "./Product/Product";
import { useApiContext } from "../../utils/context";

const  Products = ({ innerPage, headingText }) => {
    const {apiData} = useApiContext();
    return (
        <div className="products-container">
            {!innerPage && <div className="sec-heading">{headingText}</div>}
            <div className="products">
            {apiData && apiData.map((product) => <Product product={product} key={product.id}/>)}
            </div>
        </div>

    );
};

export default Products;
