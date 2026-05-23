// 1. IMPORT CÁC THƯ VIỆN CẦN THIẾT
// - memo: Giúp tối ưu hiệu năng, tránh re-render (tải lại component) lãng phí khi không có sự thay đổi.
// - useState: Hook cơ bản của React giúp tạo và quản lý các trạng thái (state) dữ liệu ngay trong component.
import { memo, useState } from "react";

// - useNavigate: Hook của thư viện 'react-router-dom', dùng để điều hướng người dùng 
//   chuyển sang trang khác (ví dụ: về trang chủ sau khi đăng nhập thành công) mà không cần tải lại toàn bộ trang web.
import { useNavigate } from "react-router-dom";

// - Import file giao diện Scss riêng cho trang Login này
import "./style.scss";

// 2. ĐỊNH NGHĨA COMPONENT LOGINPAGE
const LoginPage = () => {
    // [Khởi tạo State]: useState("") tạo ra một biến chứa dữ liệu và một hàm để cập nhật dữ liệu đó.
    // - email: Biến lưu trữ giá trị text mà người dùng nhập vào ô Tài khoản. Giá trị ban đầu là chuỗi rỗng "".
    // - setEmail: Hàm dùng để cập nhật lại giá trị cho biến 'email'.
    const [email, setEmail] = useState("");

    // Tương tự, dùng để quản lý trạng thái của ô nhập Mật khẩu (password)
    const [password, setPassword] = useState("");

    // Thực thi hàm useNavigate() và gán vào biến 'navigate' để có thể gọi dùng ở các hàm bên dưới.
    const navigate = useNavigate();

    // 3. HÀM XỬ LÝ SỰ KIỆN KHI NGƯỜI DÙNG BẤM NÚT ĐĂNG NHẬP (SUBMIT FORM)
    const handleLogin = (e) => {
        // e.preventDefault(): Lệnh cực kỳ quan trọng trong React. 
        // Nó ngăn chặn hành vi mặc định của Form trong HTML (hành vi tự động reload/F5 lại trang khi submit).
        // Nhờ câu lệnh này, trang web giữ nguyên trạng thái Single Page Application (SPA).
        e.preventDefault();

        // [Khu vực xử lý Logic]: Nơi nhóm bạn sẽ viết code gọi API xuống Back-end (NodeJS, C#...) để kiểm tra tài khoản.
        // Hiện tại đang Log ra console để nhóm kiểm tra xem dữ liệu lấy từ ô input đã chuẩn chưa.
        console.log("Dữ liệu gửi lên hệ thống VinaDental:", { email, password });
        
        // Hiển thị một thông báo popup nhỏ trên màn hình cho người dùng biết
        alert("Đăng nhập thành công vào hệ thống VinaDental!");

        // Lệnh điều hướng: Đưa người dùng quay trở về trang chủ Mặc định "/" một cách mượt mà.
        navigate("/"); 
    };

    // 4. PHẦN GIAO DIỆN COMPONENT (JSX)
    return (
        <div className="login-container">
            <div className="login-box">
                
                {/* Phần tiêu đề thương hiệu */}
                <div className="login-header">
                    <h2>VinaDental</h2>
                    <p>Hệ thống nha khoa kỹ thuật cao</p>
                </div>

                {/* Form Đăng nhập: Khi người dùng nhấn nút hoặc ấn Enter, sự kiện onSubmit sẽ kích hoạt hàm handleLogin */}
                <form onSubmit={handleLogin}>
                    
                    {/* Ô nhập tài khoản Email */}
                    <div className="input-group">
                        <label>Email / Số điện thoại</label>
                        <input 
                            type="text" 
                            placeholder="Nhập tài khoản..." 
                            value={email} // Gắn biến state 'email' vào thuộc tính value để kiểm soát dữ liệu (Controlled Component)
                            
                            // onChange: Sự kiện chạy liên tục mỗi khi người dùng gõ phím.
                            // e.target.value: Lấy ra chính xác những gì người dùng vừa gõ.
                            // setEmail(...): Cập nhật ngay chữ vừa gõ đó vào biến 'email' ở phía trên.
                            onChange={(e) => setEmail(e.target.value)} 
                            required // Thuộc tính HTML5 bắt buộc người dùng không được bỏ trống ô này
                        />
                    </div>

                    {/* Ô nhập Mật khẩu */}
                    <div className="input-group">
                        <label>Mật khẩu</label>
                        <input 
                            type="password" // Ký tự nhập vào sẽ tự động biến thành dấu chấm ẩn đi để bảo mật
                            placeholder="••••••••" 
                            value={password} // Gắn biến state 'password' vào value
                            onChange={(e) => setPassword(e.target.value)} // Cập nhật state password khi gõ phím
                            required
                        />
                    </div>

                    {/* Nút bấm Submit: Thuộc tính type="submit" giúp kích hoạt sự kiện onSubmit của thẻ <form> */}
                    <button type="submit" className="btn-login">Đăng Nhập</button>
                </form>

                {/* Phần chân trang Login chứa các liên kết phụ trợ */}
                <div className="login-footer">
                    <p>Quên mật khẩu? <span>Lấy lại tại đây</span></p>
                </div>

            </div>
        </div>
    );
};

// 5. EXPORT COMPONENT KẾT HỢP BỌC MEMO
// - memo(LoginPage): Giúp đóng gói component lại. Khi component cha re-render, 
//   nếu các giá trị dữ liệu (props) truyền vào LoginPage không đổi, React sẽ bỏ qua việc render lại trang Login này, 
//   giúp ứng dụng chạy nhanh hơn, mượt mà hơn. Rất chuẩn chỉ cho tiêu chí chấm điểm tối ưu đồ án!
export default memo(LoginPage);