import { useState } from "react";
import "../styles/giftbox.css";

function GiftBox({ onOpen }) {
  const [step, setStep] = useState(0);

  const handleClick = () => {
    if (step === 0) {
      setStep(1);
    } else if (step === 1) {
      setStep(2);

      setTimeout(() => {
        onOpen();
      }, 3000);
    }
  };

  return (
    <div className="gift-page">

      <h1 className="gift-title">
        🎁 Luxury Birthday Hamper
      </h1>

      <div className="gift-container" onClick={handleClick}>

        {/* Floating Decorations */}
        {step === 2 && (
          <>
            <div className="float heart1">❤️</div>
            <div className="float heart2">💖</div>

            <div className="float balloon1">🎈</div>
            <div className="float balloon2">🎈</div>

            <div className="float star1">✨</div>
            <div className="float star2">⭐</div>

            <div className="float cake1">🎂</div>
            <div className="float cake2">🧁</div>
          </>
        )}

        {/* Happy Birthday */}
        {step === 2 && (
          <div className="birthday-popup">
            🎉 Happy Birthday My love ❤️ 🎉
          </div>
        )}

        {/* Ribbon */}
        <div className={`ribbon ${step >= 1 ? "open" : ""}`}>
          🎀
        </div>

        {/* Gift Box */}
        <div className={`box ${step === 2 ? "open" : ""}`}>
          🎁
        </div>

        <p className="status-text">
          {step === 0 && "Tap Ribbon 🎀"}
          {step === 1 && "Opening Ribbon... ✨"}
          {step === 2 && "Happy Birthday ❤️"}
        </p>

      </div>

    </div>
  );
}

export default GiftBox;