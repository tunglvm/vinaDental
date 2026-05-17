import { Component } from "react";
import { ROUTER } from "./utils/router";
import { Routes, Route } from "react-router-dom";
import Masterlayout from "./pages/user/theme/masterlayout";
import ProfilePage from "./pages/user/profilePage";
import HomePage from "./pages/user/homePage";

//function to render user routes.
const renderUserRouter = () => {

    //array containing route configurations.
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
        <Masterlayout> //Wrap all pages inside the Masterlayout component.
            <Routes> //Routes component manages all Route components.
                {
                    userRouter.map((item, key) => ( //Duyệt qua mảng userRouter và tạo các Route.
                        <Route key = {key} path = {item.path} element = {item.component} />
                    ))
                }
            </Routes>
        </Masterlayout>
    );
};

const RoterCustom = () => {
    //Call and return user routes.
    return renderUserRouter();
}

export default RoterCustom;