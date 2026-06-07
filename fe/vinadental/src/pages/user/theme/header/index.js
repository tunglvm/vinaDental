import { memo } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import "./style.scss";
import { FaFacebook, FaInstagram, FaUser } from "react-icons/fa6";

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
        <>
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-6 header__top_left">
                            <span>HOTLINE: 18001008</span>
                        </div>
                        <div className="col-6 header__top_right">
                            <ul>
                                <li>
                                    <Link to="">
                                        <FaFacebook />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="">
                                        <FaInstagram />
                                    </Link>
                                </li>
                                <li>
                                    {isLogin ? (
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
                                        <Link to={ROUTER.USER.LOGIN} className="login-link-box">
                                            <FaUser />
                                            <span>Đăng nhập</span>
                                        </Link>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-xl-3">
                        logo
                    </div>
                    <div className="col-xl-6">
                        menu
                    </div>
                    <div className="col-xl-3">
                        Đặt lịch
                    </div>
                </div>
            </div>
        </>
        

        
    );
};

export default memo(Header);