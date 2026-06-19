import { useState } from "react";
import "../styles/final.css";

function FinalSurprise({ onRestart }) {
  const [showLetter, setShowLetter] = useState(false);

  return (
    <div className="final-container">
      <div className="card">

        <h1>🎬 The End… But Not Really</h1>

        <p>
          No matter how many screens you saw...
          everything always comes back to <b>"Us"</b> ❤️
        </p>

        <p>
          This isn't just a hamper...
          it's a collection of feelings, memories & us. 🫶
        </p>

        <h2>❤️ I'm lucky to have you ❤️</h2>

        <h2
          className="cartoon-btn"
          onClick={() => setShowLetter(!showLetter)}
        >
          – Your Cartoon ❤️
        </h2>

        {showLetter && (
          <div className="secret-letter">

            <h2>💌 Secret Letter</h2>

            <p>
              No matter how many birthdays come and go,
              you'll always be my Mr. Cartoon ❤️

              an ho he website tumhi kadhi he use karu shakata i know ki aapn aaplya khup felling yemekansobt shere nhi kart tr tumhi letters throw karu shakta.
              he dyayach reson mnje mi tumhala real wal hamper nhi deu shakt jya tumca kd thevayala tumhala nehami problem hoil but he hamper nehami tumcya sobt rahil.
            </p>

            <h2>❤️ Love You So Much ❤️</h2>

          </div>
        )}

        <button onClick={onRestart}>
          🔁 Restart Hamper
        </button>

      </div>
    </div>
  );
}

export default FinalSurprise;