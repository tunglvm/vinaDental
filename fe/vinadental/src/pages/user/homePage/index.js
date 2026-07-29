import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTER } from "../../../utils/router";
import "./style.scss";

// Bạn có thể thay bằng link ảnh bác sĩ/nha khoa thực tế trong thư mục assets của bạn
const HERO_IMAGE_URL = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop";

const HomePage = () => {
    const navigate = useNavigate();

    // Hàm chuyển hướng sang trang đặt lịch (hoặc trang login nếu chưa đăng nhập)
    const handleBookingClick = () => {
        navigate(ROUTER.USER.LOGIN);
    };

    return (
        <div className="homepage-container">
            {/* ================= HERO BANNER SECTION ================= */}
            <section className="hero-banner">
                <div className="container">
                    <div className="row align-items-center">
                        {/* CỘT BÊN TRÁI: Nội dung giới thiệu & Nút Đặt lịch */}
                        <div className="col-12 col-md-6 hero-text-box">
                            <span className="sub-title">🏥 Hệ Thống Nha Khoa Kỹ Thuật Cao</span>
                            <h1 className="main-title">
                                Kiến Tạo Nụ Cười <br />
                                <span>Rạng Rỡ & Chắc Khỏe</span>
                            </h1>
                            <p className="description">
                                VinaDental cung cấp giải pháp chăm sóc răng miệng toàn diện với đội ngũ bác sĩ hàng đầu, trang thiết bị chuẩn Châu Âu và trải nghiệm không đau.
                            </p>
                            
                            <div className="hero-btn-group">
                                <button className="btn-booking-primary" onClick={handleBookingClick}>
                                    📅 Đặt Lịch Khám Ngay
                                </button>
                                <a href="#services" className="btn-services-secondary">
                                    🦷 Xem Dịch Vụ
                                </a>
                            </div>

                            {/* Thống kê nhanh dưới Banner */}
                            <div className="hero-stats">
                                <div className="stat-item">
                                    <h3>15+</h3>
                                    <p>Năm kinh nghiệm</p>
                                </div>
                                <div className="stat-item">
                                    <h3>10.000+</h3>
                                    <p>Khách hàng hài lòng</p>
                                </div>
                                <div className="stat-item">
                                    <h3>100%</h3>
                                    <p>Chuẩn vô trùng</p>
                                </div>
                            </div>
                        </div>

                        {/* CỘT BÊN PHẢI: Hình ảnh minh họa */}
                        <div className="col-12 col-md-6 hero-image-box">
                            <div className="image-wrapper">
                                <img src={HERO_IMAGE_URL} alt="VinaDental Doctor" />
                                <div className="badge-experience">
                                    <span>⭐ Đạt chuẩn Y Khoa Quốc Tế</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default memo(HomePage);