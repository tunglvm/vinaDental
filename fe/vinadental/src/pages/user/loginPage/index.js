import { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Giả lập xử lý đăng nhập
        console.log("Đăng nhập:", { email, password });
        
        // Sau khi đăng nhập thành công, điều hướng về trang chủ
        alert("Đăng nhập thành công!");
        navigate("/"); 
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-header">
                    <h2>VinaDental</h2>
                    <p>Hệ thống nha khoa kỹ thuật cao</p>
                </div>
                <form onSubmit={handleLogin}>
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
                    <button type="submit" className="btn-login">Đăng Nhập</button>
                </form>
                <div className="login-footer">
                    <p>Quên mật khẩu? <span>Lấy lại tại đây</span></p>
                </div>
            </div>
        </div>
    );
};

export default memo(LoginPage);