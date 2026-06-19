import { useState } from "react";
import photos from "../data/photos";
import "../styles/album.css";

function MemoryAlbum({ onBack }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="album-container">

      <h1>📸 Memory Box</h1>

      {/* GRID VIEW */}
      {selected === null ? (
        <div className="glass-grid">

          {photos.map((p) => (
            <div
              key={p.id}
              className="glass-card"
              onClick={() => setSelected(p)}
            >

              <div className="photo-number">#{p.id}</div>

              <img src={p.img} alt="" className="thumb" />

              <p className="open-text">Tap to Open ❤️</p>

            </div>
          ))}

        </div>
      ) : (
        /* MODAL VIEW */
        <div className="modal">

          <div className="modal-card">

            {/* FRONT PHOTO */}
            <img src={selected.img} alt="" className="full-img" />

            {/* BACK CAPTION (FIXED) */}
            <div className="caption">
              💌 {selected.caption || selected.text}
            </div>

            <button onClick={() => setSelected(null)}>
              ← Back
            </button>

          </div>

        </div>
      )}

      <button onClick={onBack}>← Back to Dashboard</button>

    </div>
  );
}


export default MemoryAlbum;