import { useEffect, useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from  "react-icons/cg";
import { AiOutlineHeart} from "react-icons/ai";

import LogoImg from "../../assets/wealmery-logo.png";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";

import "./Header.scss";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const handleScroll = () => {
        const offset = window.scrollY
        if(offset > 200)
        {
            setScrolled(true);
        } else {
            setScrolled(false);

        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

    },[])
    return (
    <header className={`main-header ${scrolled ? 'sticky-header' : ""}`}>
        <div className="header-content">
            <ul className="center">
                <li>Home</li>
                <li>Super Saver Combo</li>
                <li>Blog</li>
                <li>About</li>
                <li>Log in / Sign Up</li>
               
            </ul>
            <div className="logo">
                <img src={LogoImg} alt="" />
            </div>
            <div className="right">
                <TbSearch />
                <AiOutlineHeart />
                <span className="cart-icon">
                    <CgShoppingCart />
                    <span>5</span>
                </span>
                

            </div>
        </div>
    </header>
    );
};

export default Header;
