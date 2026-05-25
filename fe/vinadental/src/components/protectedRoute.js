// Thư viện cơ bản để tạo component và điều hướng chuyển hướng trang ngầm
import { Navigate } from "react-router-dom";
import { ROUTER } from "../utils/router";

// Component nhận vào:
// - children: Các trang con muốn hiển thị nếu hợp lệ.
// - allowedRoles: Mảng chứa các quyền được phép vào (Ví dụ: ["admin"])
const ProtectedRoute = ({ children, allowedRoles }) => {
    // Quét dữ liệu trạng thái từ localStorage của trình duyệt
    const isLogin = localStorage.getItem("isLogin") === "true";
    const userRole = localStorage.getItem("userRole"); // "admin" hoặc "user"

    // BƯỚC 1: Nếu chưa đăng nhập, đá ngay người dùng về màn hình Login
    if (!isLogin) {
        return <Navigate to={ROUTER.USER.LOGIN} replace />;
    }

    // BƯỚC 2: Nếu đã đăng nhập nhưng Quyền hiện tại không nằm trong danh sách được cho phép
    if (allowedRoles && !allowedRoles.includes(userRole)) {
        // Đá văng người dùng thường về trang chủ (Hoặc trang báo lỗi 403 tùy bạn)
        return <Navigate to={ROUTER.USER.HOME} replace />;
    }

    // BƯỚC 3: Nếu vượt qua hết các điều kiện check ở trên -> Cho phép truy cập trang con hợp lệ
    return children;
};

export default ProtectedRoute;