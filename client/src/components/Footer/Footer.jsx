import React from "react"; 
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Images from "../../utils/image";

const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                WeaLMery AROMA is a leading provider of high-quality essential oils. We are committed to providing our customers with the purest, most effective oils on the market. 
                </div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow />
                    <div className="text">LF-17/9, B.T.M. Layout 2nd Stage, Bangalore, Karnataka, 560076</div>
                </div>
                <div className="c-item">
                    <FaMobileAlt />
                    <div className="text">Phone: +91 9019417577</div>
                </div>
                <div className="c-item">
                    <FaEnvelope />
                    <div className="text">Email: support@wealmery.com</div>
                </div>
            </div>
            <div className="col">
                <div className="title">Categories</div>
                <span className="text">Essential Oils</span>
                <span className="text">Comos</span>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Returns</span>
                <span className="text">Terms & Conditions</span>
                <span className="text">Contact Us</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                © 2023 WeaLMery AROMA. All rights reserved.

                </div>
                <img src={Images.payment} alt="" />

            </div>

        </div>
    </footer>
};

export default Footer;
