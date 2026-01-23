import React, { useState } from "react";
import CustomInput from "./CustomInput";
import ProgressVisual from "./ProgressVisual";

function TodayTab({ SetDeedsByDate }) {
  const deeds = [
    "Smile intentionally today.",
    "Pray for someone you love.",
    "Remove something harmful from a path.",
    "Speak gently, even when rushed.",
    "Thank someone you often forget to thank.",
    "Be patient once today, for the sake of Allah.",
    "Leave a place cleaner than you found it.",
    "Choose kindness when it costs nothing.",
    "Tell the truth even when it's hard.",
  ];

  const [done, setDone] = useState(false);
  const [doneDeed, setDoneDeed] = useState();
  const [index, setIndex] = useState(Math.floor(Math.random() * deeds.length));
  const [newDeed, setNewDeed] = useState("");

  // Helper to get today's date string
  const getTodayStr = () => new Date().toISOString().split("T")[0];

  const saveDeedForToday = (deed) => {
    const today = getTodayStr();

    setDeedsByDate((prev) => {
      const existing = prev[today] || [];
      return {
        ...prev,
        [today]: [...existing, deed],
      };
    });
  };

  const completeRandomDeed = () => {
    setDone(true);
    setDoneDeed(deeds[index]);
    saveDeedForToday(newDeed);
  };

  const completeCustomDeed = () => {
    if (newDeed.trim() !== "") {
      setDone(true);
      setDoneDeed(newDeed);
      saveDeedForToday(newDeed);
      setNewDeed("");
    }
  };

  const nextDeed = () => {
    setDone(false);
    setDoneDeed("");
    setNewDeed("");
    setIndex(Math.floor(Math.random() * deeds.length));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>🌱 Today’s Good Deed</h2>
      <p>{deeds[index]}</p>

      <ProgressVisual done={done} deedText={doneDeed} />

      <button onClick={completeRandomDeed}>
        {done ? "Done!" : "I did this!"}
      </button>

      <br />
      <br />

      <CustomInput
        value={newDeed}
        setValue={setNewDeed}
        onSubmit={completeCustomDeed}
      />

      <br />
      <br />
      <button onClick={nextDeed}>Show me another deed</button>
    </div>
  );
}

export default TodayTab;
