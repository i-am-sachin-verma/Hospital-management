import React from "react";
import { Link } from "react-router-dom";
import {
  UserPlus,
  ClipboardList,
  Stethoscope,
  BedDouble,
  Activity,
} from "lucide-react";

function AdminPanel() {
  const features = [
    {
      title: "Add Patient",
      desc: "Register new patients and manage their details.",
      link: "/add-patient",
      icon: <UserPlus className="w-8 h-8 text-blue-500" />,
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Add Allotment",
      desc: "Assign patients to doctors and manage beds/wards.",
      link: "/add-allotment",
      icon: <ClipboardList className="w-8 h-8 text-green-500" />,
      color: "from-green-400 to-green-600",
    },
    {
      title: "Manage Doctors",
      desc: "Add, remove, and update doctor information.",
      link: "/manage-doctors",
      icon: <Stethoscope className="w-8 h-8 text-purple-500" />,
      color: "from-purple-400 to-purple-600",
    },
    {
      title: "ICU Management",
      desc: "Assign ICU heads and oversee ICU operations.",
      link: "/manage-icu",
      icon: <BedDouble className="w-8 h-8 text-red-500" />,
      color: "from-red-400 to-red-600",
    },
    {
      title: "Medical Dashboard",
      desc: "View drug usage, diseases, and patient statistics.",
      link: "/medical",
      icon: <Activity className="w-8 h-8 text-orange-500" />,
      color: "from-orange-400 to-orange-600",
    },
  ];

  return (
    <div className="admin-panel-bg">
      {/* Header */}
      <div className="admin-header">
        <h2 className="admin-title">
          ⚙️ Admin Panel
        </h2>
        <p className="admin-subtitle">
          Welcome Admin! Use the tools below to manage hospital operations.
        </p>
      </div>

      {/* Features Flex Row */}
      <div className="admin-features-row">
        {features.map((item, index) => (
          <div
            key={index}
            className="admin-card"
          >
            <div className="admin-card-icon">
              {item.icon}
            </div>
            <h3 className="admin-card-title">
              {item.title}
            </h3>
            <p className="admin-card-desc">
              {item.desc}
            </p>
            <Link
              to={item.link}
              className="admin-card-btn"
            >
              Open
            </Link>
          </div>
        ))}
      </div>
      {/* Add a main action button at the bottom */}
      <div className="admin-main-action">
        <button className="admin-main-btn">
          Main Action
        </button>
      </div>
      <style>{`
        .admin-panel-bg {
          min-height: 100vh;
          background: linear-gradient(135deg, #f3f4f6 0%, #e0e7ff 50%, #e5e7eb 100%);
          padding: 32px 16px;
          font-family: 'Segoe UI', Arial, sans-serif;
        }
        .admin-header {
          margin-bottom: 32px;
          text-align: center;
        }
        .admin-title {
          font-size: 2.2rem;
          font-weight: 800;
          color: #22223b;
          text-shadow: 0 2px 8px #e0e7ff;
        }
        .admin-subtitle {
          color: #4b5563;
          margin-top: 6px;
          font-size: 1.05rem;
        }
        .admin-features-row {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          justify-content: center;
        }
        .admin-card {
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 2px 12px 0 rgba(30, 64, 175, 0.07);
          transition: box-shadow 0.3s, transform 0.3s;
          padding: 18px 16px 16px 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 220px;
          min-height: 170px;
          border: 1px solid #f3f4f6;
          position: relative;
          overflow: hidden;
        }
        .admin-card:hover {
          box-shadow: 0 8px 32px 0 rgba(30, 64, 175, 0.13);
          transform: translateY(-4px) scale(1.03);
        }
        .admin-card-icon {
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 1px 4px 0 rgba(30, 64, 175, 0.07);
          padding: 8px;
          font-size: 2rem;
        }
        .admin-card-title {
          font-size: 1.08rem;
          font-weight: 700;
          color: #22223b;
          margin-bottom: 4px;
          text-align: center;
        }
        .admin-card-desc {
          color: #6b7280;
          font-size: 0.93rem;
          text-align: center;
          margin-bottom: 12px;
        }
        .admin-card-btn {
          display: inline-block;
          padding: 7px 18px;
          border-radius: 8px;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(90deg, #2563eb 0%, #60a5fa 100%);
          box-shadow: 0 2px 8px 0 rgba(30, 64, 175, 0.10);
          border: none;
          font-size: 0.98rem;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, transform 0.2s, box-shadow 0.2s;
          text-decoration: none;
        }
        .admin-card-btn:hover {
          background: linear-gradient(90deg, #1e40af 0%, #3b82f6 100%);
          color: #ffe066;
          transform: scale(1.07);
          box-shadow: 0 4px 16px 0 rgba(30, 64, 175, 0.18);
        }
        .admin-main-action {
          display: flex;
          justify-content: center;
          margin-top: 40px;
        }
        .admin-main-btn {
          padding: 14px 38px;
          border-radius: 18px;
          background: linear-gradient(90deg, #2563eb 0%, #60a5fa 100%);
          color: #fff;
          font-weight: 800;
          font-size: 1.08rem;
          box-shadow: 0 4px 18px 0 rgba(30, 64, 175, 0.13);
          border: 2px solid #2563eb;
          cursor: pointer;
          letter-spacing: 1px;
          transition: background 0.2s, color 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .admin-main-btn:hover {
          background: linear-gradient(90deg, #1e40af 0%, #3b82f6 100%);
          color: #ffe066;
          transform: scale(1.06);
          box-shadow: 0 8px 32px 0 rgba(30, 64, 175, 0.18);
        }
      `}</style>
    </div>
  );
}

export default AdminPanel;
