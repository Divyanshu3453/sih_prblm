import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getTestStatus } from "../api/testService";
import Loading from "../components/Loading";
import ErrorBox from "../components/ErrorBox";

export default function TestProgress() {
  const { testId } = useParams();
  const [status, setStatus] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let timer;
    const poll = async () => {
      try {
        const data = await getTestStatus(testId);
        setStatus(data);
        if (!["COMPLETED","FAILED","CANCELLED"].includes(data.status)) timer = setTimeout(poll, 2000);
      } catch (err) { setError(err.message); }
    };
    poll();
    return () => clearTimeout(timer);
  }, [testId]);

  if (!status && !error) return <Loading text="Connecting to test session..." />;

  const statusText = {
    OBSERVATION_COMPLETED: "Waiting for device telemetry...",
    WAITING_FOR_DEVICE: "Waiting for sensor data...",
    SENDING_TO_ML: "Sending measurements to ML model...",
    CALCULATING_RISK: "Calculating clinical risk...",
    COMPLETED: "Assessment complete.",
    FAILED: "Assessment failed.",
    CANCELLED: "Assessment cancelled."
  };

  return (
    <div className="progress-page">
      <span className="eyebrow">Test {testId}</span>
      <h1>{statusText[status?.status] || "Processing..."}</h1>
      <ErrorBox message={error}/>
      <section className="panel progress-card">
        <div className="progress-track"><div style={{width:`${status?.progress || 0}%`}} /></div>
        <div className="progress-number">{status?.progress || 0}%</div>
        <p>Backend state: <strong>{status?.status}</strong></p>
        {status?.status === "COMPLETED" && <Link className="primary-btn inline-btn" to={`/tests/${testId}/result`}>View result</Link>}
        {status?.status === "FAILED" && <Link className="secondary-btn inline-btn" to="/dashboard">Return to dashboard</Link>}
      </section>
      <div className="sensor-note"><strong>Hardware integration</strong><span>The Bluetooth/IoT device should POST telemetry to <code>/api/iot/sensor-data</code> using the test ID.</span></div>
    </div>
  );
}
