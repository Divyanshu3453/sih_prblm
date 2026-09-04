import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Pencil, Trash2, Play } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Loading from "../components/Loading";
import ErrorBox from "../components/ErrorBox";
import { deleteCow, getCow, updateCow } from "../api/cowService";

export default function CowDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cow, setCow] = useState(null);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    getCow(id).then(({cow}) => { setCow(cow); setForm(cow); }).catch(err => setError(err.message));
  }, [id]);

  if (error && !cow) return <ErrorBox message={error}/>;
  if (!cow) return <Loading text="Loading cow..." />;

  const save = async (e) => {
    e.preventDefault();
    try {
      const { cow: updated } = await updateCow(id, {
        name: form.name, breed: form.breed, age: Number(form.age),
        lactationNumber: Number(form.lactationNumber),
        lactationCycle: Number(form.lactationCycle),
        penNumber: form.penNumber, active: form.active
      });
      setCow(updated); setForm(updated); setEditing(false);
    } catch (err) { setError(err.message); }
  };

  const remove = async () => {
    if (!confirm(`Delete ${cow.name}?`)) return;
    try { await deleteCow(id); navigate("/cows"); } catch (err) { setError(err.message); }
  };

  return (
    <>
      <PageHeader title={cow.name} subtitle={`${cow.cowId} · ${cow.breed || "Breed not set"}`} action={<Link className="secondary-btn inline-btn" to="/cows"><ArrowLeft size={16}/> Back</Link>} />
      <ErrorBox message={error}/>
      <div className="detail-grid">
        <section className="panel">
          <div className="panel-head"><h2>Cow profile</h2><div className="header-actions"><button className="secondary-btn" onClick={()=>setEditing(!editing)}><Pencil size={15}/> Edit</button><button className="danger-btn" onClick={remove}><Trash2 size={15}/></button></div></div>
          {editing ? (
            <form className="form" onSubmit={save}>
              {["name","breed","age","lactationNumber","lactationCycle","penNumber"].map(k=><label key={k}>{k}<input value={form[k] ?? ""} type={["age","lactationNumber","lactationCycle"].includes(k)?"number":"text"} onChange={e=>setForm({...form,[k]:e.target.value})}/></label>)}
              <button className="primary-btn">Save changes</button>
            </form>
          ) : (
            <div className="info-list">
              <div><span>Age</span><strong>{cow.age ?? "—"}</strong></div>
              <div><span>Lactation number</span><strong>{cow.lactationNumber ?? "—"}</strong></div>
              <div><span>Lactation cycle</span><strong>{cow.lactationCycle ?? "—"}</strong></div>
              <div><span>Pen</span><strong>{cow.penNumber || "—"}</strong></div>
              <div><span>Status</span><strong>{cow.active ? "Active" : "Inactive"}</strong></div>
            </div>
          )}
        </section>

        <section className="panel highlight-panel">
          <span className="eyebrow">Current assessment</span>
          <div className={`big-risk ${String(cow.currentRiskLevel||"UNTESTED").toLowerCase()}`}>{cow.currentRiskScore ?? "—"}{cow.currentRiskScore != null && "%"}</div>
          <strong>{cow.currentRiskLevel || "UNTESTED"}</strong>
          <p>{cow.lastTestDate ? `Last test: ${new Date(cow.lastTestDate).toLocaleString()}` : "This cow has not been assessed yet."}</p>
          <Link className="primary-btn inline-btn" to={`/tests/new/${cow._id}`}><Play size={16}/> Start milk test</Link>
        </section>
      </div>
    </>
  );
}
