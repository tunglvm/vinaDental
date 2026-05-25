import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTER } from "../../../utils/router";
import "./style.scss";

const DashboardPage = () => {
    const navigate = useNavigate();

    // Hàm xử lý Đăng xuất (Xóa quyền trong localStorage và đá về trang Login)
    const handleLogout = () => {
        localStorage.clear(); // Xóa sạch token, role "admin"
        alert("Đã đăng xuất khỏi hệ thống quản trị!");
        navigate(ROUTER.USER.LOGIN);
    };

    return (
        <div className="dashboard-container">
            {/* 1. THANH SIDEBAR BÊN TRÁI */}
            <aside className="sidebar">
                <div className="sidebar-brand">
                    <h2>VinaDental</h2>
                    <span>Hệ thống Quản trị</span>
                </div>
                
                <nav className="sidebar-menu">
                    <a href="#dashboard" className="menu-item active">📊 Tổng quan</a>
                    <a href="#appointments" className="menu-item">📅 Lịch hẹn khám</a>
                    <a href="#patients" className="menu-item">👥 Quản lý bệnh nhân</a>
                    <a href="#doctors" className="menu-item">👨‍⚕️ Đội ngũ bác sĩ</a>
                    <a href="#services" className="menu-item">🦷 Dịch vụ nha khoa</a>
                </nav>

                <div className="sidebar-footer">
                    <button className="btn-logout" onClick={handleLogout}>
                        🚪 Đăng xuất
                    </button>
                </div>
            </aside>

            {/* 2. KHU VỰC NỘI DUNG CHÍNH BÊN PHẢI */}
            <main className="main-content">
                {/* Header trên cùng */}
                <header className="main-header">
                    <div className="welcome-text">
                        <h1>Xin chào, Quản trị viên!</h1>
                        <p>Dưới đây là báo cáo hoạt động phòng khám trong ngày hôm nay.</p>
                    </div>
                    <div className="admin-profile">
                        <div className="avatar">AD</div>
                    </div>
                </header>

                {/* Khu vực thẻ thông số Thống kê (Cards) */}
                <section className="stats-grid">
                    <div className="stat-card pink">
                        <h3>120</h3>
                        <p>Tổng số bệnh nhân</p>
                    </div>
                    <div className="stat-card blue">
                        <h3>45</h3>
                        <p>Lịch hẹn hôm nay</p>
                    </div>
                    <div className="stat-card green">
                        <h3>12</h3>
                        <p>Bác sĩ đang trực</p>
                    </div>
                    <div className="stat-card orange">
                        <h3>32.5M</h3>
                        <p>Doanh thu ngày (VND)</p>
                    </div>
                </section>

                {/* Bảng danh sách lịch khám gần đây */}
                <section className="table-section">
                    <h2>📅 Danh sách lịch hẹn mới nhất</h2>
                    <div className="table-responsive">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Mã LH</th>
                                    <th>Tên bệnh nhân</th>
                                    <th>Dịch vụ điều trị</th>
                                    <th>Bác sĩ phụ trách</th>
                                    <th>Thời gian</th>
                                    <th>Trạng thái</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>#LH-091</td>
                                    <td>Nguyễn Văn A</td>
                                    <td>Trám răng thẩm mỹ</td>
                                    <td>ThS. BS Trần Văn B</td>
                                    <td>09:30 AM</td>
                                    <td><span className="badge status-pending">Đang chờ</span></td>
                                </tr>
                                <tr>
                                    <td>#LH-092</td>
                                    <td>Trần Thị B</td>
                                    <td>Niềng răng Invisalign</td>
                                    <td>TS. BS Nguyễn Thị C</td>
                                    <td>10:45 AM</td>
                                    <td><span className="badge status-success">Đã khám</span></td>
                                </tr>
                                <tr>
                                    <td>#LH-093</td>
                                    <td>Lê Hoàng C</td>
                                    <td>Bọc răng sứ Cercon</td>
                                    <td>ThS. BS Trần Văn B</td>
                                    <td>02:00 PM</td>
                                    <td><span className="badge status-pending">Đang chờ</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default memo(DashboardPage);