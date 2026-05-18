import { memo } from "react";
import "./style.scss";
import { FaFacebook } from "react-icons/fa6";

const Header = () => {
    return (
        <div className="header__top">
            <div className="container">
                <div className="row">
                    <div className="col-6"></div>
                    <div className="col-6 header__top_right">
                        <ul>
                            <li><FaFacebook /></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Header);