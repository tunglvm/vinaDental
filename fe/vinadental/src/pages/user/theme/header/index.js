import { memo } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";

const Header = () => {
    return (
        <div className="header__top">
            <div className="container">
                <div className="row">
                    <div className="col-6"></div>
                    <div className="col-6 header__top_right">
                        <ul>
                            <li>
                                <Link to = {""}>
                                    <FaFacebook />
                                </Link>
                            </li>
                            <li>
                                <Link to = {""}>
                                    <FaInstagram />
                                </Link>
                            </li>
                            <li>
                                <Link to = {""}>
                                    <FaUser />
                                </Link>
                                <Link to = {""}>
                                    <span>Đăng nhập</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Header);