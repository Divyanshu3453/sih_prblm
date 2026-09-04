import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Search } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Loading from "../components/Loading";
import ErrorBox from "../components/ErrorBox";
import { createCow, getCows } from "../api/cowService";

const empty = { cowId:"", name:"", breed:"", age:"", lactationNumber:"", lactationCycle:"", penNumber:"" };

export default function Cows() {
  const [cows, setCows] = useState([]);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(empty);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const load = async () => {
    setLoading(true);
    try {
      const data = await getCows(search ? { search } : {});
      setCows(data.cows || []);
      setError("");
    } catch (err) { setError(err.message); }
    finally { setLoading(false); }
  };

  useEffect(() => { load(); }, [search]);

  const submit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await createCow({
        ...form,
        age: form.age === "" ? undefined : Number(form.age),
        lactationNumber: form.lactationNumber === "" ? undefined : Number(form.lactationNumber),
        lactationCycle: form.lactationCycle === "" ? undefined : Number(form.lactationCycle),
      });
      setForm(empty);
      setShowForm(false);
      await load();
    } catch (err) { setError(err.message); }
    finally { setSaving(false); }
  };

  return (
    <>
      <PageHeader title="My cows" subtitle="Register, inspect and assess cattle." action={<button className="primary-btn" onClick={() => setShowForm(!showForm)}><Plus size={16}/> Register cow</button>} />
      <ErrorBox message={error} />

      {showForm && (
        <form className="panel form-panel" onSubmit={submit}>
          <h2>Register a cow</h2>
          <div className="form-grid">
            {[
              ["cowId","Cow ID",true],["name","Name",true],["breed","Breed"],["age","Age","number"],
              ["lactationNumber","Lactation number","number"],["lactationCycle","Lactation cycle","number"],["penNumber","Pen number"]
            ].map(([key,label,kind]) => (
              <label key={key}>{label}<input required={kind===true} type={kind==="number"?"number":"text"} min={kind==="number"?0:undefined} value={form[key]} onChange={e=>setForm({...form,[key]:e.target.value})}/></label>
            ))}
          </div>
          <div className="form-actions"><button type="button" className="secondary-btn" onClick={()=>setShowForm(false)}>Cancel</button><button className="primary-btn" disabled={saving}>{saving?"Saving...":"Save cow"}</button></div>
        </form>
      )}

      <div className="search-box"><Search size={17}/><input placeholder="Search by cow name or ID..." value={search} onChange={e=>setSearch(e.target.value)} /></div>

      {loading ? <Loading text="Loading cows..." /> : cows.length === 0 ? <div className="empty panel">No cows found.</div> : (
        <div className="cow-grid">
          {cows.map(cow => (
            <Link className="cow-card" to={`/cows/${cow._id}`} key={cow._id}>
              <div className="cow-card-top"><div className="cow-avatar">C</div><span className={`risk-pill ${String(cow.currentRiskLevel||"UNTESTED").toLowerCase()}`}>{cow.currentRiskLevel || "UNTESTED"}</span></div>
              <h2>{cow.name}</h2><p>{cow.cowId} · {cow.breed || "Breed not set"}</p>
              <div className="cow-meta"><span>Age {cow.age ?? "—"}</span><span>Pen {cow.penNumber || "—"}</span></div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
