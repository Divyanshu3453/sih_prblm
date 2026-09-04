
import React from "react";
import { useAuth } from "../context/AuthContext";
import PageHeader from "../components/PageHeader";

export default function Profile() {
  const { user } = useAuth();
  return (
    <>
      <PageHeader title="Profile" subtitle="Authenticated farmer account." />
      <section className="panel profile-panel">
        <div className="avatar large">{user?.name?.[0]?.toUpperCase()}</div>
        <div className="info-list">
          <div><span>Name</span><strong>{user?.name}</strong></div>
          <div><span>Email</span><strong>{user?.email}</strong></div>
          <div><span>Phone</span><strong>{user?.phone || "—"}</strong></div>
          <div><span>Farm</span><strong>{user?.farmName || "—"}</strong></div>
          <div><span>Role</span><strong>{user?.role}</strong></div>
        </div>
      </section>
    </>
  );
}