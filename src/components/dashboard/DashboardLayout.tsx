import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.jpg";
import { Image } from "@/components/ui";

interface DashboardLayoutProps {
  children: ReactNode;
}

const links = [
  { label: "Dashboard", to: "/dashboard" },
  { label: "Orders", to: "/orders" },
  { label: "Menu", to: "/menu" },
  { label: "Inventory", to: "/inventory" },
  { label: "Customers", to: "/customers" },
  { label: "My Profile", to: "/profile" },
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("userRole");
      navigate("/staff-login");
    }
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="logo-section">
          <Image src={logo} alt="logo" />
          <h2>Happy Tails</h2>
        </div>

        <ul className="menu">
          {links.map((link) => (
            <li key={link.to} onClick={() => navigate(link.to)}>
              {link.label}
            </li>
          ))}
        </ul>

        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </aside>

      <main className="main">{children}</main>
    </div>
  );
}
