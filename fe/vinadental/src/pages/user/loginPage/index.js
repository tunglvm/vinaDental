import { memo, useState } from "react";
// Import useNavigate để chuyển hướng trang bằng logic và Link để làm link bấm chuyển sang Register
import { useNavigate, Link } from "react-router-dom";
// Import ROUTER để gọi đúng các đường dẫn tuyệt đối đã cấu hình hệ thống
import { ROUTER } from "../../../utils/router";
import "./style.scss";

const LoginPage = () => {
    // Khởi tạo State lưu giá trị ô nhập Email và Mật khẩu
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    // Hook dùng để điều hướng chuyển trang
    const navigate = useNavigate();

    // HÀM XỬ LÝ SỰ KIỆN KHI NGƯỜI DÙNG NHẤN NÚT ĐĂNG NHẬP
    const handleLogin = (e) => {
        e.preventDefault(); // Ngăn hành vi load lại trang mặc định của Form HTML

        // TÌNH HUỐNG 1: Nếu người dùng đăng nhập bằng tài khoản Admin
        if (email === "admin@vinadental.com" && password === "admin123") {
            // Lưu trạng thái đăng nhập là TRUE và quyền là ADMIN vào bộ nhớ trình duyệt
            localStorage.setItem("isLogin", "true");
            localStorage.setItem("userRole", "admin");

            alert("Đăng nhập tài khoản Quản trị viên thành công!");
            
            // Điều hướng bay thẳng vào trang Dashboard full màn hình của Admin
            navigate(ROUTER.ADMIN.DASHBOARD);
        } 
        // TÌNH HUỐNG 2: Nếu người dùng đăng nhập tài khoản thường (Khách hàng/Bệnh nhân)
        else {
            // Lưu trạng thái đăng nhập là TRUE và quyền là USER thông thường
            localStorage.setItem("isLogin", "true");
            localStorage.setItem("userRole", "user");

            alert("Đăng nhập tài khoản Khách hàng thành công!");
            
            // Điều hướng quay trở lại trang chủ của hệ thống
            navigate(ROUTER.USER.HOME);
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                {/* Header Tiêu đề Form */}
                <div className="login-header">
                    <h2>VinaDental</h2>
                    <p>Hệ thống nha khoa kỹ thuật cao</p>
                </div>

                {/* Form Đăng nhập */}
                <form onSubmit={handleLogin}>
                    {/* Ô nhập tài khoản */}
                    <div className="input-group">
                        <label>Email / Số điện thoại</label>
                        <input 
                            type="text" 
                            placeholder="Nhập tài khoản..." 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                            required
                        />
                    </div>

                    {/* Ô nhập mật khẩu */}
                    <div className="input-group">
                        <label>Mật khẩu</label>
                        <input 
                            type="password" 
                            placeholder="••••••••" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required
                        />
                    </div>

                    {/* Nút bấm Submit Form */}
                    <button type="submit" className="btn-login">Đăng Nhập</button>
                </form>

                {/* Footer chứa các link điều hướng phụ */}
                <div className="login-footer">
                    {/* Dòng chữ bấm để chuyển sang trang Đăng ký */}
                    <p className="register-redirect">
                        Chưa có tài khoản?{" "}
                        <Link to={ROUTER.USER.REGISTER} className="register-link">
                            Vui lòng đăng ký tại đây
                        </Link>
                    </p>
                    
                    {/* Tính năng quên mật khẩu */}
                    <p className="forgot-password">
                        Quên mật khẩu? <span>Lấy lại tại đây</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

// Đóng gói memo để tối ưu hiệu năng render trang đồ án
export default memo(LoginPage);