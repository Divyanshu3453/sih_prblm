import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Activity, LayoutDashboard, LogOut, PawPrint, UserRound } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Layout() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const logout = async () => {
    await signOut();
    navigate("/login", { replace: true });
  };

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark"><Activity size={20} /></div>
          <div>
            <strong>SOMATIC</strong>
            <span>Clinical Field System</span>
          </div>
        </div>

        <nav className="nav">
          <NavLink to="/dashboard"><LayoutDashboard size={18} /> Dashboard</NavLink>
          <NavLink to="/cows"><PawPrint size={18} /> My Cows</NavLink>
          <NavLink to="/profile"><UserRound size={18} /> Profile</NavLink>
        </nav>

        <div className="sidebar-footer">
          <div className="user-mini">
            <div className="avatar">{user?.name?.[0]?.toUpperCase() || "F"}</div>
            <div>
              <strong>{user?.name || "Farmer"}</strong>
              <span>{user?.farmName || "Farm"}</span>
            </div>
          </div>
          <button className="ghost-btn" onClick={logout}><LogOut size={17} /> Logout</button>
        </div>
      </aside>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
