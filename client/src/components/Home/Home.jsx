import "./Home.scss";

import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { useApiContext } from "../../utils/context";
import { useEffect } from "react";

const Home = () => {
    const {apiData, data, getParticularData} = useApiContext();
    useEffect(() => {
        getParticularData('1');
        console.log(data, "data");
    }, []);
    return (
    <div>
        <Banner />
        <div className="main-content">
            <div className="layout">
            <Category />
            <Products headingText="Popular Products" />
            </div>
        </div>

    </div>
    );
};

export default Home;
