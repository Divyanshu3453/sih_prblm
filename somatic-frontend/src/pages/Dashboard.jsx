import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, RefreshCw, AlertTriangle } from "lucide-react";
import PageHeader from "../components/PageHeader";
import StatCard from "../components/StatCard";
import Loading from "../components/Loading";
import ErrorBox from "../components/ErrorBox";
import { getCows } from "../api/cowService";
import { getFarmHealth } from "../api/farmService";

export default function Dashboard() {
  const [health, setHealth] = useState(null);
  const [cows, setCows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = async () => {
    setLoading(true);
    setError("");
    try {
      const [farm, cowData] = await Promise.all([
        getFarmHealth(),
        getCows({ active: "true" })
      ]);
      setHealth(farm);
      setCows(cowData.cows || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  if (loading) return <Loading text="Loading farm health..." />;

  return (
    <>
      <PageHeader
        title="Farm dashboard"
        subtitle="Current cattle health and recent assessment activity."
        action={<div className="header-actions"><button className="secondary-btn" onClick={load}><RefreshCw size={16}/> Refresh</button><Link className="primary-btn inline-btn" to="/cows"><Plus size={16}/> Manage cows</Link></div>}
      />
      <ErrorBox message={error} />

      <section className="stats-grid">
        <StatCard label="Total cows" value={health?.overview?.totalCows} />
        <StatCard label="Active cows" value={health?.overview?.activeCows} />
        <StatCard label="Attention required" value={health?.overview?.cowsRequiringAttention} danger />
        <StatCard label="Avg. risk score" value={health?.overview?.averageRiskScore} hint="Last 30 days" />
        <StatCard label="Tests" value={health?.overview?.totalTests30Days} hint="Last 30 days" />
      </section>

      <div className="content-grid">
        <section className="panel">
          <div className="panel-head"><h2>Risk distribution</h2></div>
          <div className="risk-list">
            {Object.entries(health?.riskDistribution || {}).map(([level, count]) => (
              <div className="risk-row" key={level}>
                <span>{level.replace("_", " ")}</span>
                <strong>{count}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="panel">
          <div className="panel-head"><h2>Cows requiring attention</h2></div>
          {(health?.cowsRequiringAttention || []).length === 0 ? (
            <div className="empty">No high-risk cows currently flagged.</div>
          ) : (
            <div className="table">
              {health.cowsRequiringAttention.map(cow => (
                <Link className="table-row" to={`/cows/${cow._id}`} key={cow._id}>
                  <div><strong>{cow.name}</strong><span>{cow.cowId} · Pen {cow.penNumber || "—"}</span></div>
                  <div className="risk-value"><AlertTriangle size={15}/>{cow.currentRiskScore ?? "—"}%</div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}
