import { memo } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import "./style.scss";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";

import { ROUTER } from "../../../../utils/router";

const Header = () => {
    const navigate = useNavigate();

    const isLogin = localStorage.getItem("isLogin") === "true";
    const userName = localStorage.getItem("userName");

    const handleLogout = () => {
        localStorage.clear(); 
        alert("Đăng xuất tài khoản thành công!");
        navigate(ROUTER.USER.LOGIN); 
    };

    return (
        <div className="header__top">
            <div className="container">
                <div className="row">
                    <div className="col-6"></div>
                    <div className="col-6 header__top_right">
                        <ul>
                            <li>
                                <Link to={""}>
                                    <FaFacebook />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <FaInstagram />
                                </Link>
                            </li>
                            
                            <li>
                                {isLogin ? (
                                    // Thêm class "user-logged-box" để căn chỉnh bên SCSS
                                    <div className="user-logged-box">
                                        <FaUser />
                                        <span className="welcome-msg">
                                            👋 Xin chào, <strong>{userName}</strong>
                                        </span>
                                        <button onClick={handleLogout} className="btn-logout-text">
                                            [Đăng xuất]
                                        </button>
                                    </div>
                                ) : (
                                    <div className="user-login-box">
                                        <Link to={ROUTER.USER.LOGIN}>
                                            <FaUser />
                                        </Link>
                                        <Link to={ROUTER.USER.LOGIN}>
                                            <span>Đăng nhập</span>
                                        </Link>
                                    </div>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Header);