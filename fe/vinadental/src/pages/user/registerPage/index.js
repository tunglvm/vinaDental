import { memo, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ROUTER } from "../../../utils/router";
import "./style.scss";

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const navigate = useNavigate();

    // Hàm xử lý khi người dùng thay đổi dữ liệu trong ô input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Hàm xử lý khi nhấn nút Đăng Ký
    const handleRegister = (e) => {
        e.preventDefault();
        
        if (formData.password !== formData.confirmPassword) {
            alert("Mật khẩu xác nhận không trùng khớp!");
            return;
        }

        console.log("Dữ liệu đăng ký VinaDental:", formData);
        alert("Đăng ký tài khoản thành công!");
        
        // Đăng ký xong tự động chuyển hướng sang trang Login để họ đăng nhập
        navigate(ROUTER.USER.LOGIN); 
    };

    return (
        <div className="register-container">
            <div className="register-box">
                <div className="register-header">
                    <h2>Đăng Ký Tài Khoản</h2>
                    <p>Trở thành thành viên của VinaDental ngay hôm nay</p>
                </div>

                <form onSubmit={handleRegister}>
                    <div className="input-group">
                        <label>Họ và tên</label>
                        <input 
                            type="text" 
                            name="fullName"
                            placeholder="Nguyễn Văn A" 
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Số điện thoại</label>
                        <input 
                            type="tel" 
                            name="phone"
                            placeholder="0912345678" 
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Email</label>
                        <input 
                            type="email" 
                            name="email"
                            placeholder="username@vinadental.com" 
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Mật khẩu</label>
                        <input 
                            type="password" 
                            name="password"
                            placeholder="••••••••" 
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Xác nhận mật khẩu</label>
                        <input 
                            type="password" 
                            name="confirmPassword"
                            placeholder="••••••••" 
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn-register">Đăng Ký</button>
                </form>

                <div className="register-footer">
                    <p>
                        Đã có tài khoản?{" "}
                        <Link to={ROUTER.USER.LOGIN}>
                            Đăng nhập ngay
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default memo(RegisterPage);