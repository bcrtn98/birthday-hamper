import { useState } from "react";
import reasons from "../data/reasons";
import "../styles/reasons.css";

function ReasonsJar({ onBack }) {
  const [index, setIndex] = useState(0);
  const [currentReason, setCurrentReason] = useState("");
  const [anim, setAnim] = useState(false);

  const handleClick = () => {
    if (anim) return;

    setAnim(true);

    setTimeout(() => {
      if (index < reasons.length) {
        setCurrentReason(reasons[index]);
        setIndex(index + 1);
      } else {
        setCurrentReason("28 Reasons were never enough...Because one lifetime is too short to list every reason.      I love you.❤️ ");
      }

      setAnim(false);
    }, 300);
  };

  return (
    <div className="jar-container">

      <h1>🫙 28 Reasons Jar</h1>

      {/* JAR */}
      <div
        className={`jar ${anim ? "shake" : ""}`}
        onClick={handleClick}
      >
        🫙 Tap the jar
      </div>

      {/* PAPER SLIP */}
      {currentReason && (
        <div className={`reason-box ${anim ? "pop" : ""}`}>
          📜 {currentReason}
        </div>
      )}

      <p className="hint">Tap jar to pull a reason ❤️</p>

      <button className="back-btn" onClick={onBack}>
        ← Back to Dashboard
      </button>

    </div>
  );
}

export default ReasonsJar;