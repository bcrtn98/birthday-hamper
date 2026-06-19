import { useState } from "react";

import DeliveryScreen from "./components/DeliveryScreen";
import GiftBox from "./components/GiftBox";
import HamperDashboard from "./components/HamperDashboard";
import ReasonsJar from "./components/ReasonsJar";
import LoveLetters from "./components/LoveLetters";
import MemoryAlbum from "./components/MemoryAlbum";
import Coupons from "./components/Coupons";
import ImportantDates from "./components/ImportantDates";
import FinalSurprise from "./components/FinalSurprise";
import Music from "./components/Music";

function App() {
  const [screen, setScreen] = useState("delivery");

  return (
    <>
      {/* 🎶 MUSIC (always running) */}
      <Music />

      {/* DELIVERY */}
      {screen === "delivery" && (
        <DeliveryScreen onAccept={() => setScreen("gift")} />
      )}

      {/* GIFT BOX */}
      {screen === "gift" && (
        <GiftBox onOpen={() => setScreen("dashboard")} />
      )}

      {/* DASHBOARD (MAIN HOME) */}
      {screen === "dashboard" && (
        <HamperDashboard
          onOpenJar={() => setScreen("jar")}
          onOpenLetters={() => setScreen("letters")}
          onOpenAlbum={() => setScreen("album")}
          onOpenCoupons={() => setScreen("coupons")}
          onOpenDates={() => setScreen("dates")}
          onOpenFinal={() => setScreen("final")}
        />
      )}

      {/* PAGES */}
      {screen === "jar" && (
        <ReasonsJar onBack={() => setScreen("dashboard")} />
      )}

      {screen === "letters" && (
        <LoveLetters onBack={() => setScreen("dashboard")} />
      )}

      {screen === "album" && (
        <MemoryAlbum onBack={() => setScreen("dashboard")} />
      )}

      {screen === "coupons" && (
        <Coupons onBack={() => setScreen("dashboard")} />
      )}

      {screen === "dates" && (
        <ImportantDates onBack={() => setScreen("dashboard")} />
      )}

      {/* FINAL */}
      {screen === "final" && (
        <FinalSurprise onRestart={() => setScreen("delivery")} />
      )}
    </>
  );
}

export default App;