import { Component } from "react";
import { ROUTER } from "./utils/router";
import { Routes, Route } from "react-router-dom";
import Masterlayout from "./pages/user/theme/masterlayout";
import ProfilePage from "./pages/user/profilePage";
import HomePage from "./pages/user/homePage";
import LoginPage from "./pages/user/loginPage";
import RegisterPage from "./pages/user/registerPage";

const renderUserRouter = () => {

    // NHÓM 1: Mảng chứa các trang thông thường (CẦN hiển thị Header/Footer)
    const userLayoutRouter = [
        {
            path: ROUTER.USER.HOME,
            component: <HomePage />
        },
        {
            path: ROUTER.USER.PROFILE,
            component: <ProfilePage />
        }
    ];

    // NHÓM 2: Mảng chứa các trang độc lập (KHÔNG hiển thị Header/Footer)
    const standaloneRouter = [
        {
            path: ROUTER.USER.LOGIN,
            component: <LoginPage />
        },
        {
            path: ROUTER.USER.REGISTER,
            component: <RegisterPage />
        }
    ];

    return (
        <Routes>
            {/* 1. Duyệt map cho nhóm trang độc lập trước để ép chúng ăn full màn hình */}
            {standaloneRouter.map((item, key) => (
                <Route key={`standalone-${key}`} path={item.path} element={item.component} />
            ))}

            {/* 2. Cấu hình tất cả các trang dùng chung Masterlayout */}
            {/* Dấu "/*" ở path giúp bọc toàn bộ các trang con bên dưới lại */}
            <Route 
                path="/*" 
                element={
                    <Masterlayout> 
                        <Routes> 
                            {userLayoutRouter.map((item, key) => (
                                <Route key={`layout-${key}`} path={item.path} element={item.component} />
                            ))}
                        </Routes>
                    </Masterlayout>
                }
            />
        </Routes>
    );
};

const RoterCustom = () => {
    return renderUserRouter();
}

export default RoterCustom;