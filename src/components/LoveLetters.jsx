import { useState } from "react";
import letters from "../data/letters";
import "../styles/letters.css";

function LoveLetters({ onBack }) {
  const [selected, setSelected] = useState(null);

  const phone = "919637645364"; // ✅ your number fixed format

  function openWhatsApp(text) {
    const msg = encodeURIComponent(text);
    const url = `https://wa.me/${phone}?text=${msg}`;
    window.open(url, "_blank");
  }

  return (
    <div className="letters-container">

      <h1>💌 Love Letters</h1>

      {selected === null ? (
        <div className="menu">

          <p className="hint">Tap your mood ❤️</p>

          {letters.map((item, i) => (
            <div
              key={i}
              className="menu-item"
              onClick={() => setSelected(i)}
            >
              {item.title}
            </div>
          ))}

        </div>
      ) : (
        <div className="letter-box">

          <pre style={{ whiteSpace: "pre-wrap", textAlign: "left" }}>
            {letters[selected].text}
          </pre>

          {/* 💌 WhatsApp Button */}
          <button
            onClick={() => openWhatsApp(letters[selected].whatsapp)}
          >
            💌 Love You
          </button>

          <button onClick={() => setSelected(null)}>
            ← Back
          </button>

        </div>
      )}

      <button onClick={onBack}>← Back to Dashboard</button>

    </div>
  );
}


export default LoveLetters;