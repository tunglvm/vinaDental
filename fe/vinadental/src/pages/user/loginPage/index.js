import { memo, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ROUTER } from "../../../utils/router";
import "./style.scss";

// ĐỊNH NGHĨA COMPONENT LOGINPAGE
const LoginPage = () => {
    // Khởi tạo trạng thái (State) cho ô nhập Tài khoản/Email
    // - email: Biến chứa dữ liệu người dùng gõ vào.
    // - setEmail: Hàm để thay đổi dữ liệu cho biến 'email'.
    const [email, setEmail] = useState("");

    // Khởi tạo trạng thái (State) cho ô nhập Mật khẩu
    // - password: Biến chứa mật khẩu.
    // - setPassword: Hàm cập nhật mật khẩu.
    const [password, setPassword] = useState("");

    // Thực thi hook để tạo ra một đối tượng điều hướng, gán vào biến 'navigate'
    const navigate = useNavigate();

    // HÀM XỬ LÝ SỰ KIỆN KHI NGƯỜI DÙNG NHẤN NÚT "ĐĂNG NHẬP" (Hoặc nhấn Enter trong form)
    const handleLogin = (e) => {
        // e.preventDefault(): Lệnh ngăn chặn hành vi tải lại trang mặc định của thẻ <form> trong HTML.
        // Giúp ứng dụng giữ được tính chất SPA (Single Page Application) - chạy ngầm mượt mà.
        e.preventDefault();

        // In ra màn hình Console dữ liệu mà người dùng đã nhập để nhóm bạn dễ kiểm tra (Debug)
        console.log("Dữ liệu gửi lên hệ thống VinaDental:", { email, password });
        
        // Hiện thông báo popup báo thành công trên trình duyệt
        alert("Đăng nhập thành công vào hệ thống VinaDental!");

        // Điều hướng người dùng quay trở lại màn hình Trang Chủ ("/") sau khi đăng nhập thành công
        navigate("/"); 
    };

    // PHẦN DIỄN HOẠ GIAO DIỆN (JSX)
    return (
        <div className="login-container">
            <div className="login-box">
                
                {/* Khu vực hiển thị Tên thương hiệu và thông điệp chào mừng */}
                <div className="login-header">
                    <h2>VinaDental</h2>
                    <p>Hệ thống nha khoa kỹ thuật cao</p>
                </div>

                {/* Khai báo Form: Khi nhấn nút submit, form sẽ kích hoạt chạy hàm handleLogin phía trên */}
                <form onSubmit={handleLogin}>
                    
                    {/* Ô nhập liệu Tài khoản */}
                    <div className="input-group">
                        <label>Email / Số điện thoại</label>
                        <input 
                            type="text" 
                            placeholder="Nhập tài khoản..." 
                            value={email} // Controlled Component: Gắn biến 'email' trực tiếp quản lý giá trị của ô input
                            
                            // onChange: Lắng nghe liên tục thao tác gõ phím.
                            // e.target.value: Lấy chính xác ký tự vừa gõ và nạp ngay vào hàm setEmail để cập nhật State.
                            onChange={(e) => setEmail(e.target.value)} 
                            required // Thuộc tính bắt buộc, nếu để trống form sẽ không cho submit
                        />
                    </div>

                    {/* Ô nhập liệu Mật khẩu */}
                    <div className="input-group">
                        <label>Mật khẩu</label>
                        <input 
                            type="password" // Biến các ký tự thành dấu chấm tròn để bảo mật, tránh lộ mật khẩu
                            placeholder="••••••••" 
                            value={password} // Kiểm soát giá trị bằng biến 'password'
                            onChange={(e) => setPassword(e.target.value)} // Cập nhật mật khẩu khi gõ phím
                            required
                        />
                    </div>

                    {/* Nút bấm Đăng nhập. Thuộc tính type="submit" là bắt buộc để kích hoạt sự kiện onSubmit của Form */}
                    <button type="submit" className="btn-login">Đăng Nhập</button>
                </form>

                {/* Khu vực chân trang chứa các liên kết chuyển đổi */}
                <div className="login-footer">
                    {/* Dòng liên kết hướng dẫn người dùng đăng ký tài khoản mới */}
                    <p className="register-redirect">
                        Chưa có tài khoản?{" "}
                        {/* Thẻ <Link to={...}> giúp chuyển đổi mượt mà sang trang Đăng ký mà không bị load lại trang */}
                        <Link to={ROUTER.USER.REGISTER} className="register-link">
                            Vui lòng đăng ký tại đây
                        </Link>
                    </p>
                    
                    {/* Tính năng phụ lấy lại mật khẩu */}
                    <p className="forgot-password">
                        Quên mật khẩu? <span>Lấy lại tại đây</span>
                    </p>
                </div>

            </div>
        </div>
    );
};

// Đóng gói component và export ra ngoài hệ thống. 
// Việc bọc trong hàm memo() giúp nâng cao hiệu năng render, ghi điểm tối ưu cấu trúc mã nguồn đồ án.
export default memo(LoginPage);