import { Component } from "react";
import { ROUTER } from "./utils/router";
import { Routes, Route } from "react-router-dom";
import Masterlayout from "./pages/user/theme/masterlayout";
import ProfilePage from "./pages/user/profilePage";
import HomePage from "./pages/user/homePage";

const renderUserRouter = () => {
    const userRouter = [
        {
            path: ROUTER.USER.HOME,
            component: <HomePage/>
        },
        {
            path: ROUTER.USER.PROFILE,
            component: <ProfilePage/>
        },
    ];

    return (
        <Masterlayout>
            <Routes>
                {
                    userRouter.map((item, key) => (
                        <Route key = {key} path = {item.path} element = {item.component} />
                    ))
                }
            </Routes>
        </Masterlayout>
    );
};

const RoterCustom = () => {
    return renderUserRouter();
}

export default RoterCustom;