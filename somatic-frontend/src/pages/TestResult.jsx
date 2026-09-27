import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";
import { useTranslation } from "react-i18next";

import { getTestResult } from "../api/testService";
import { getTestReport } from "../api/reportService";
import Loading from "../components/Loading";
import ErrorBox from "../components/ErrorBox";

export default function TestResult() {
  const { t } = useTranslation();
  const { testId } = useParams();

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getTestResult(testId)
      .then(setResult)
      .catch((err) => setError(err.message));
  }, [testId]);

  if (!result && !error) {
    return <Loading text={t("loadingAssessmentResult")} />;
  }

  if (error) {
    return (
      <>
        <ErrorBox message={error} />

        <Link
          className="secondary-btn inline-btn"
          to="/dashboard"
        >
          <ArrowLeft size={16} />
          {t("dashboard")}
        </Link>
      </>
    );
  }

  const riskClass = String(
    result.risk?.level || "UNKNOWN"
  ).toLowerCase();

  const getRiskLabel = (level) => {
    const normalized = String(level || "UNKNOWN").toUpperCase();

    const riskTranslations = {
      LOW: "riskLow",
      MEDIUM: "riskMedium",
      HIGH: "riskHigh",
      CRITICAL: "riskCritical",
      UNKNOWN: "unknown",
    };

    return t(riskTranslations[normalized] || "unknown");
  };

  const getTrendLabel = (trend) => {
    if (!trend) return "—";

    const trendTranslations = {
      IMPROVING: "trendImproving",
      STABLE: "trendStable",
      WORSENING: "trendWorsening",
      DECLINING: "trendWorsening",
    };

    const key = trendTranslations[String(trend).toUpperCase()];

    return key ? t(key) : trend;
  };

  return (
    <>
      {/* ================= HEADER ================= */}

      <div className="result-header">
        <div>
          <span className="eyebrow">
            {t("assessmentResult")}
          </span>

          <h1>
            {result.cow?.name || t("cow")} · {testId}
          </h1>
        </div>

        <Link
          className="secondary-btn inline-btn"
          to="/dashboard"
        >
          <ArrowLeft size={16} />
          {t("dashboard")}
        </Link>
      </div>

      {/* ================= RISK SUMMARY ================= */}

      <section className={`result-hero ${riskClass}`}>
        <div>
          <span>{t("finalRiskScore")}</span>

          <strong>
            {result.risk?.percentage ??
              result.risk?.score ??
              0}
            %
          </strong>
        </div>

        <div>
          <span>{t("riskLevel")}</span>

          <strong>
            {getRiskLabel(result.risk?.level)}
          </strong>
        </div>

        <div>
          <span>{t("trend")}</span>

          <strong>
            {getTrendLabel(result.risk?.trend)}
          </strong>
        </div>
      </section>

      {/* ================= SENSOR + AI ================= */}

      <div className="content-grid">

        {/* SENSOR MEASUREMENTS */}

        <section className="panel">
          <div className="panel-head">
            <h2>{t("sensorMeasurements")}</h2>
          </div>

          <div className="measurement-grid">

            <Metric
              label="pH"
              value={
                result.sensors?.ph?.value ?? "—"
              }
              status={
                result.sensors?.ph?.status
              }
            />

            <Metric
              label={t("temperature")}
              value={
                result.sensors?.temperature?.value ?? "—"
              }
              suffix="°C"
              status={
                result.sensors?.temperature?.status
              }
            />

            <Metric
              label={t("conductivity")}
              value={
                result.sensors?.conductivity?.value ?? "—"
              }
              suffix=" mS"
              status={
                result.sensors?.conductivity?.status
              }
            />

          </div>
        </section>

        {/* AI ANALYSIS */}

        <section className="panel">
          <div className="panel-head">
            <h2>{t("aiAnalysis")}</h2>
          </div>

          <div className="info-list">

            <div>
              <span>{t("probability")}</span>

              <strong>
                {Math.round(
                  (result.ml?.probability || 0) * 100
                )}
                %
              </strong>
            </div>

            <div>
              <span>{t("confidence")}</span>

              <strong>
                {Math.round(
                  (result.ml?.confidence || 0) * 100
                )}
                %
              </strong>
            </div>

            <div>
              <span>{t("model")}</span>

              <strong>
                {result.ml?.modelVersion || "—"}
              </strong>
            </div>

          </div>
        </section>

      </div>

      {/* ================= FACTORS + ACTIONS ================= */}

      <div className="content-grid">

        {/* CONTRIBUTING FACTORS */}

        <section className="panel">

          <div className="panel-head">
            <h2>{t("contributingFactors")}</h2>
          </div>

          <ul className="clean-list">

            {(result.contributingFactors || []).map(
              (factor, index) => (
                <li key={index}>
                  {factor}
                </li>
              )
            )}

          </ul>

        </section>

        {/* RECOMMENDED ACTIONS */}

        <section className="panel">

          <div className="panel-head">
            <h2>{t("recommendedActions")}</h2>
          </div>

          <ul className="clean-list">

            {(result.recommendedActions || []).map(
              (action, index) => (
                <li key={index}>

                  <strong>
                    {action.title}
                  </strong>

                  <p>
                    {action.description}
                  </p>

                  <small>
                    {action.reason}
                  </small>

                  <div>
                    <small>
                      {t("priority")}: {action.priority}
                    </small>
                  </div>

                </li>
              )
            )}

          </ul>

        </section>

      </div>

      {/* ================= DISCLAIMER ================= */}

      <section className="panel disclaimer">

        <strong>
          {t("clinicalDisclaimer")}
        </strong>

        <p>
          {result.disclaimer}
        </p>

      </section>

      {/* ================= REPORT ================= */}

      <p className="muted report-note">

        <FileText size={15} />

        {t("reportEndpointNote")}{" "}

        <code>
          reportService.js
        </code>

        ; {t("mount")}{" "}

        <code>
          /api/reports
        </code>

        {" "}{t("beforeUsingIt")}

      </p>
    </>
  );
}


/* ================================================= */
/* METRIC COMPONENT                                  */
/* ================================================= */

function Metric({
  label,
  value,
  suffix,
  status
}) {
  return (
    <div className="metric">

      <span>
        {label}
      </span>

      <strong>
        {value}
        {suffix}
      </strong>

      <small>
        {status || "—"}
      </small>

    </div>
  );
}