import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";
import { getTestResult } from "../api/testService";
import { getTestReport } from "../api/reportService";
import Loading from "../components/Loading";
import ErrorBox from "../components/ErrorBox";

export default function TestResult() {
  const { testId } = useParams();
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getTestResult(testId).then(setResult).catch(err => setError(err.message));
  }, [testId]);

  if (!result && !error) return <Loading text="Loading assessment result..." />;
  if (error) return <><ErrorBox message={error}/><Link className="secondary-btn inline-btn" to="/dashboard"><ArrowLeft size={16}/> Dashboard</Link></>;

  const riskClass = String(result.risk?.level || "UNKNOWN").toLowerCase();

  return (
    <>
      <div className="result-header"><div><span className="eyebrow">Assessment result</span><h1>{result.cow?.name || "Cow"} · {testId}</h1></div><Link className="secondary-btn inline-btn" to="/dashboard"><ArrowLeft size={16}/> Dashboard</Link></div>
      <section className={`result-hero ${riskClass}`}>
        <div><span>Final risk score</span><strong>{result.risk?.percentage ?? result.risk?.score ?? 0}%</strong></div>
        <div><span>Risk level</span><strong>{result.risk?.level}</strong></div>
        <div><span>Trend</span><strong>{result.risk?.trend || "—"}</strong></div>
      </section>

      <div className="content-grid">
        <section className="panel"><div className="panel-head"><h2>Sensor measurements</h2></div>
          <div className="measurement-grid">
            <Metric label="pH" value={result.sensors?.ph?.value ?? "—"} status={result.sensors?.ph?.status}/>
            <Metric label="Temperature" value={result.sensors?.temperature?.value ?? "—"} suffix="°C" status={result.sensors?.temperature?.status}/>
            <Metric label="Conductivity" value={result.sensors?.conductivity?.value ?? "—"} suffix=" mS" status={result.sensors?.conductivity?.status}/>
          </div>
        </section>

        <section className="panel"><div className="panel-head"><h2>AI analysis</h2></div>
          <div className="info-list"><div><span>Probability</span><strong>{Math.round((result.ml?.probability || 0)*100)}%</strong></div><div><span>Confidence</span><strong>{Math.round((result.ml?.confidence || 0)*100)}%</strong></div><div><span>Model</span><strong>{result.ml?.modelVersion || "—"}</strong></div></div>
        </section>
      </div>

      <div className="content-grid">
        <section className="panel"><div className="panel-head"><h2>Contributing factors</h2></div><ul className="clean-list">{(result.contributingFactors||[]).map((x,i)=><li key={i}>{x}</li>)}</ul></section>
        <section className="panel"><div className="panel-head"><h2>Recommended actions</h2></div><ul className="clean-list">{(result.recommendedActions||[]).map((x,i)=><li key={i}>{x}</li>)}</ul></section>
      </div>

      <section className="panel disclaimer"><strong>Clinical disclaimer</strong><p>{result.disclaimer}</p></section>
      <p className="muted report-note"><FileText size={15}/> Report endpoint is wired in <code>reportService.js</code>; mount <code>/api/reports</code> in the backend before using it.</p>
    </>
  );
}

function Metric({label,value,suffix,status}) {
  return <div className="metric"><span>{label}</span><strong>{value}{suffix}</strong><small>{status || "—"}</small></div>;
}
