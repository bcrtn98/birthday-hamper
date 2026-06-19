import { useState, useRef } from "react";
import coupons from "../data/coupons";
import "../styles/coupons.css";

function Coupons({ onBack }) {
  const [selected, setSelected] = useState(null);
  const [scratched, setScratched] = useState(false);
  const canvasRef = useRef(null);

  const startScratch = () => {
    setScratched(true);
  };

  const handleScratch = (e) => {
    if (!scratched) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();
  };

  return (
    <div className="coupon-container">

      <h1>🎫 Coupons Box</h1>

      {selected === null ? (
        <div className="coupon-grid">

          {coupons.map((c) => (
            <div
              key={c.id}
              className="coupon-card"
              onClick={() => {
                const msg = encodeURIComponent(
                  `I choose this coupon ❤️\n\n${c.title}`
                );

                window.open(
                  `https://wa.me/919637645364?text=${msg}`,
                  "_blank"
                );

                setSelected(c);
                setScratched(false);
              }}
            >
              <h2>{c.title}</h2>
              <p>Tap to open 🎁</p>
            </div>
          ))}

        </div>
      ) : (
        <div className="scratch-container">

          <div className="scratch-card">

            <div className="coupon-reveal">
              <h2>{selected.title}</h2>
              <p>{selected.desc}</p>
              <h3>{selected.redeem}</h3>
            </div>

            {!scratched && (
              <canvas
                ref={canvasRef}
                width={300}
                height={200}
                className="scratch-canvas"
                onMouseDown={startScratch}
                onMouseMove={handleScratch}
                onTouchStart={startScratch}
                onTouchMove={(e) => {
                  const touch = e.touches[0];

                  handleScratch({
                    clientX: touch.clientX,
                    clientY: touch.clientY
                  });
                }}
              />
            )}

          </div>

          <button onClick={() => setSelected(null)}>
            ← Back
          </button>

        </div>
      )}

      <button onClick={onBack}>← Back to Dashboard</button>

    </div>
  );
}


export default Coupons;