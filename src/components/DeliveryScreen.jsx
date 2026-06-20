import "../styles/delivery.css";

function DeliveryScreen({ onAccept }) {

  const playSound = () => {
    const audio = new Audio("/birthday-hamper/doorbell.mp3");
    audio.play();
  };

  return (
    <div className="delivery-container">
      <div className="delivery-card">

        <div className="gift-icon">🎁</div>

        <h1>A Special Birthday Package</h1>

        <p className="subtitle">has arrived for</p>

        <h2>Mr. Cartoon ❤️</h2>

        <button
          className="delivery-btn"
          onClick={() => {
            playSound();
            onAccept();
          }}
        >
          Accept Delivery
        </button>

      </div>
    </div>
  );
}

export default DeliveryScreen;