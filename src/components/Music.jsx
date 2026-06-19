import { useRef, useState } from "react";

function Music() {
  const audioRef = useRef(new Audio("/music.mp3"));
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!playing) {
      audioRef.current.play();
      setPlaying(true);
    } else {
      audioRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <div style={{ position: "fixed", bottom: 15, right: 15 }}>
      <button onClick={toggleMusic}>
        {playing ? "⏸ Pause Music" : "🎶 Play Music"}
      </button>
    </div>
  );
}

export default Music;