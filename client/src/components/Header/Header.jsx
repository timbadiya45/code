import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import LogoImg from "../../assets/wealmery-logo.png";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context, useApiContext } from "../../utils/context";

import "./Header.scss";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { cart } = useApiContext();
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
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
            <TbSearch  onClick={() => setShowSearch(true)}/>
            <AiOutlineHeart />
            <span className="cart-icon" onClick={() => setShowCart(true)}>
              <CgShoppingCart />
              <span>{cart.length}</span>
            </span>
          </div>
        </div>
      </header>
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch= {setShowSearch}/>}
    </>
  );
};

export default Header;
