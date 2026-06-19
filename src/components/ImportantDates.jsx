import { useState } from "react";
import dates from "../data/dates";
import "../styles/dates.css";

function ImportantDates({ onBack }) {
  const [selected, setSelected] = useState(null);
  const [page, setPage] = useState(false);

  const openDiary = (d) => {
    setSelected(d);
    setPage(false);

    setTimeout(() => {
      setPage(true);
    }, 200);
  };

  const closeDiary = () => {
    setPage(false);

    setTimeout(() => {
      setSelected(null);
    }, 200);
  };

  return (
    <div className="dates-container">

      <h1>📖 Memory Diary</h1>

      {/* GRID VIEW */}
      {selected === null ? (
        <div className="dates-grid">

          {dates.map((d) => (
            <div
              key={d.id}
              className="date-card diary-card"
              onClick={() => openDiary(d)}
            >
              <div className="stamp">📅</div>
              <h2>{d.title}</h2>
              <p>{d.date}</p>
            </div>
          ))}

        </div>
      ) : (
        /* DIARY OPEN VIEW */
        <div className="diary-overlay" onClick={closeDiary}>

          <div className={`diary-page ${page ? "open" : ""}`}>

            <div className="diary-header">
              📖 Memory Entry
            </div>

            <div className="diary-content">

              <h2>{selected.title}</h2>

              <h3>{selected.date}</h3>

              <p>{selected.msg}</p>

            </div>

            <button onClick={closeDiary}>
              ← Close Diary
            </button>

          </div>

        </div>
      )}

      <button onClick={onBack}>← Back to Dashboard</button>

    </div>
  );
}


export default ImportantDates;