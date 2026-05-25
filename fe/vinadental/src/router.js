import { Routes, Route } from "react-router-dom";
import { ROUTER } from "./utils/router";

// Import component bảo vệ quyền
import ProtectedRoute from "./components/protectedRoute";

// Import các trang phía giao diện người dùng (User)
import Masterlayout from "./pages/user/theme/masterlayout";
import HomePage from "./pages/user/homePage";
import ProfilePage from "./pages/user/profilePage";
import LoginPage from "./pages/user/loginPage";
import RegisterPage from "./pages/user/registerPage";

// Import trực tiếp trang Dashboard của Admin (Không cần import AdminLayout nữa)
import DashboardPage from "./pages/admin/dashboardPage";

const renderUserRouter = () => {

    // MẢNG 1: Các trang của Khách hàng (Tự động bọc Masterlayout để hiện Header)
    const userLayoutRouter = [
        { path: ROUTER.USER.HOME, component: <HomePage /> },
        { path: ROUTER.USER.PROFILE, component: <ProfilePage /> }
    ];

    // MẢNG 2: Các trang của Admin (Hiện full màn hình, độc lập hoàn toàn)
    const adminRouter = [
        { path: ROUTER.ADMIN.DASHBOARD, component: <DashboardPage /> }
    ];

    return (
        <Routes>
            {/* CÁC TRANG TỰ DO VÀ FULL MÀN HÌNH */}
            <Route path={ROUTER.USER.LOGIN} element={<LoginPage />} />
            <Route path={ROUTER.USER.REGISTER} element={<RegisterPage />} />

            {/* MAP LAYOUT USER: Hiện các trang kèm Header/Footer chung */}
            {userLayoutRouter.map((item, key) => (
                <Route 
                    key={`user-${key}`} 
                    path={item.path} 
                    element={<Masterlayout>{item.component}</Masterlayout>} 
                />
            ))}

            {/* MAP LAYOUT ADMIN: Load trực tiếp Dashboard full màn hình nhưng vẫn giữ bộ lọc bảo vệ */}
            {adminRouter.map((item, key) => (
                <Route 
                    key={`admin-${key}`} 
                    path={item.path} 
                    element={
                        <ProtectedRoute allowedRoles={["admin"]}>
                            {item.component} 
                        </ProtectedRoute>
                    } 
                />
            ))}
        </Routes>
    );
};

const RouterCustom = () => {
    return renderUserRouter();
};

export default RouterCustom;