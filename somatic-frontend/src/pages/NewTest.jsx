import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Check, ChevronRight } from "lucide-react";
import { getCow } from "../api/cowService";
import { getQuestions } from "../api/observationService";
import { startTest, submitObservations, startSensorTest } from "../api/testService";
import Loading from "../components/Loading";
import ErrorBox from "../components/ErrorBox";

export default function NewTest() {
  const { cowId } = useParams();
  const navigate = useNavigate();
  const [cow, setCow] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [testId, setTestId] = useState(null);
  const [step, setStep] = useState("observations");
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    Promise.all([getCow(cowId), getQuestions()])
      .then(([cowData, questionData]) => {
        setCow(cowData.cow);
        setQuestions(questionData.questions || []);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [cowId]);

  const begin = async () => {
    setBusy(true);
    try {
      const result = await startTest(cowId);
      setTestId(result.test.testId);
    } catch (err) { setError(err.message); }
    finally { setBusy(false); }
  };

  const submit = async () => {
    const payload = questions.map(q => ({ questionId: q.questionId, answer: answers[q.questionId] }));
    if (payload.some(a => !a.answer)) {
      setError("Please answer every observation question.");
      return;
    }
    setBusy(true);
    try {
      const result = await submitObservations(testId, payload);
      await startSensorTest(testId);
      navigate(`/tests/${result.test.testId}/progress`);
    } catch (err) { setError(err.message); }
    finally { setBusy(false); }
  };

  if (loading) return <Loading text="Preparing test..." />;
  if (!cow) return <ErrorBox message={error || "Cow not found"} />;

  return (
    <div className="test-page">
      <div className="test-top"><span className="eyebrow">Milk health assessment</span><h1>{cow.name}</h1><p>{cow.cowId} · Complete the physical observations before connecting the sensor.</p></div>
      <ErrorBox message={error}/>
      {!testId ? (
        <section className="panel test-start">
          <h2>Start a new test</h2>
          <p>A test session will be created for this cow and will move through the backend state machine.</p>
          <button className="primary-btn" onClick={begin} disabled={busy}>{busy?"Starting...":"Start test"} <ChevronRight size={17}/></button>
        </section>
      ) : (
        <section className="panel">
          <div className="stepper"><span className="active">1. Observations</span><span>2. Sensor</span><span>3. Result</span></div>
          <h2>Clinical observations</h2>
          <p className="muted">Answer YES only when the abnormal sign is present.</p>
          <div className="question-list">
            {questions.map(q => (
              <div className="question" key={q.questionId}>
                <div><strong>{q.question}</strong><small>{q.questionId}</small></div>
                <div className="yesno">
                  {["NO","YES"].map(value => <button key={value} className={answers[q.questionId]===value?"selected":""} onClick={()=>setAnswers({...answers,[q.questionId]:value})}>{answers[q.questionId]===value && <Check size={14}/>} {value}</button>)}
                </div>
              </div>
            ))}
          </div>
          <button className="primary-btn" disabled={busy} onClick={submit}>{busy?"Submitting...":"Continue to sensor test"} <ChevronRight size={17}/></button>
        </section>
      )}
    </div>
  );
}