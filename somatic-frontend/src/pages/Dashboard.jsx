import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, RefreshCw, AlertTriangle } from "lucide-react";
import { useTranslation } from "react-i18next";

import PageHeader from "../components/PageHeader";
import StatCard from "../components/StatCard";
import Loading from "../components/Loading";
import ErrorBox from "../components/ErrorBox";
import { getCows } from "../api/cowService";
import { getFarmHealth } from "../api/farmService";

export default function Dashboard() {
  const { t } = useTranslation();

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
        getCows({ active: "true" }),
      ]);

      setHealth(farm);
      setCows(cowData.cows || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loading) {
    return <Loading text={t("loadingFarmHealth")} />;
  }

  return (
    <>
      <PageHeader
        title={t("farmDashboard")}
        subtitle={t("dashboardSubtitle")}
        action={
          <div className="header-actions">
            <button
              className="secondary-btn"
              onClick={load}
            >
              <RefreshCw size={16} />
              {t("refresh")}
            </button>

            <Link
              className="primary-btn inline-btn"
              to="/cows"
            >
              <Plus size={16} />
              {t("manageCows")}
            </Link>
          </div>
        }
      />

      <ErrorBox message={error} />

      <section className="stats-grid">
        <StatCard
          label={t("totalCows")}
          value={health?.overview?.totalCows}
        />

        <StatCard
          label={t("activeCows")}
          value={health?.overview?.activeCows}
        />

        <StatCard
          label={t("attentionRequired")}
          value={health?.overview?.cowsRequiringAttention}
          danger
        />

        <StatCard
          label={t("avgRiskScore")}
          value={health?.overview?.averageRiskScore}
          hint={t("last30Days")}
        />

        <StatCard
          label={t("tests")}
          value={health?.overview?.totalTests30Days}
          hint={t("last30Days")}
        />
      </section>

      <div className="content-grid">

        {/* Risk Distribution */}
        <section className="panel">
          <div className="panel-head">
            <h2>{t("riskDistribution")}</h2>
          </div>

          <div className="risk-list">
            {Object.entries(
              health?.riskDistribution || {}
            ).map(([level, count]) => (
              <div
                className="risk-row"
                key={level}
              >
                <span>
                  {level.replace("_", " ")}
                </span>

                <strong>
                  {count}
                </strong>
              </div>
            ))}
          </div>
        </section>

        {/* Cows Requiring Attention */}
        <section className="panel">
          <div className="panel-head">
            <h2>
              {t("cowsRequiringAttention")}
            </h2>
          </div>

          {(health?.cowsRequiringAttention || [])
            .length === 0 ? (
            <div className="empty">
              {t("noHighRiskCows")}
            </div>
          ) : (
            <div className="table">
              {health.cowsRequiringAttention.map(
                (cow) => (
                  <Link
                    className="table-row"
                    to={`/cows/${cow._id}`}
                    key={cow._id}
                  >
                    <div>
                      <strong>
                        {cow.name}
                      </strong>

                      <span>
                        {cow.cowId} · {t("pen")}{" "}
                        {cow.penNumber || "—"}
                      </span>
                    </div>

                    <div className="risk-value">
                      <AlertTriangle size={15} />

                      {cow.currentRiskScore ?? "—"}%
                    </div>
                  </Link>
                )
              )}
            </div>
          )}
        </section>

      </div>
    </>
  );
}