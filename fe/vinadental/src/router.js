import { Component } from "react";
import { ROUTER } from "./utils/router";
import { Routes, Route } from "react-router-dom";
import Masterlayout from "./pages/user/theme/masterlayout";
import ProfilePage from "./pages/user/profilePage";
import HomePage from "./pages/user/homePage";
import LoginPage from "./pages/user/loginPage"; // Hãy đảm bảo đã import trang Login

// Hàm render các route của User
const renderUserRouter = () => {

    // 1. MẢNG NÀY CHỈ CHỨA CÁC TRANG CẦN HIỆN HEADER/FOOTER (Giao diện chung)
    const userLayoutRouter = [
        {
            path: ROUTER.USER.HOME,
            component: <HomePage/>
        },
        {
            path: ROUTER.USER.PROFILE,
            component: <ProfilePage/>
        }
    ];

    return (
        <Routes>
            {/* NHÓM 1: Các trang nằm TRONG Masterlayout (Sẽ load Header) */}
            <Route 
                path="/*" // Dấu /* để bắt các đường dẫn như /, /profile
                element={
                    <Masterlayout> 
                        <Routes> 
                            {userLayoutRouter.map((item, key) => (
                                <Route key={key} path={item.path} element={item.component} />
                            ))}
                        </Routes>
                    </Masterlayout>
                }
            />

            {/* NHÓM 2: Trang Login nằm ĐỘC LẬP bên ngoài Masterlayout (Sẽ KHÔNG load Header) */}
            <Route path={ROUTER.USER.LOGIN} element={<LoginPage />} />
        </Routes>
    );
};

const RoterCustom = () => {
    return renderUserRouter();
}

export default RoterCustom;