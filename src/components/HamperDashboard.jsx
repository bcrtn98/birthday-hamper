import { useState } from "react";
import "../styles/dashboard.css";

function HamperDashboard({
  onOpenJar,
  onOpenLetters,
  onOpenAlbum,
  onOpenCoupons,
  onOpenDates,
  onOpenFinal
}) {

  const [active, setActive] = useState(null);

  const openItem = (type, fn) => {
    setActive(type);
    setTimeout(() => {
      fn();
    }, 300);
  };

  return (
    <div className="dashboard">

      <h2 className="title">🧺 Luxury Hamper Basket</h2>

      <div className="grid">

        <div className="card" onClick={() => openItem("jar", onOpenJar)}>
          🫙 Reasons Jar
        </div>

        <div className="card" onClick={() => openItem("letters", onOpenLetters)}>
          💌 Letters
        </div>

        <div className="card" onClick={() => openItem("album", onOpenAlbum)}>
          📸 Album
        </div>

        <div className="card" onClick={() => openItem("coupons", onOpenCoupons)}>
          🎫 Coupons
        </div>

        <div className="card" onClick={() => openItem("dates", onOpenDates)}>
          📅 Important Dates
        </div>

        <div className="card final" onClick={() => openItem("final", onOpenFinal)}>
          🎥 Final Gift
        </div>

      </div>

      {active && (
        <p className="hint">Opening {active}... ✨</p>
      )}

    </div>
  );
}

export default HamperDashboard;