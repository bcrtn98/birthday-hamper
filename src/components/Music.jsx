import { useRef, useState } from "react";

function Music() {
  const audioRef = useRef(
  new Audio("/birthday-hamper/music.mp3")
);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!playing) {
      audioRef.current.loop = true;
      audioRef.current.play();
      setPlaying(true);
    } else {
      audioRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "15px",
        right: "15px",
        zIndex: 9999,
      }}
    >
      <button
        onClick={toggleMusic}
        style={{
          padding: "10px 15px",
          borderRadius: "12px",
          border: "none",
          background: "#ff69b4",
          color: "white",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        {playing ? "⏸ Pause Music" : "🎶 Play Music"}
      </button>
    </div>
  );
}

export default Music;