import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function App() {
  //create and set daily deed
  const [done, setDone] = useState(false);
  const [doneDeed, setDoneDeed] = useState();
  const deeds = [
    "Smile intentionally today",
    "Say thank you to someone",
    "Pick up trash around you",
  ];
  const [index, setIndex] = useState(Math.floor(Math.random() * deeds.length));
  const [newDeed, setNewDeed] = useState("");
  const completeSetDeed = () => {
    setDone(true);
    setDoneDeed(deeds[index]);
  };
  const completeCustomDeed = () => {
    if (newDeed.trim() !== "") {
      setDone(true);
      setDoneDeed(newDeed);
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
      {/*visual progress plant*/}
      <div
        style={{
          textAlign: "center",
          fontSize: done ? "6rem" : "3rem",
          transition: "font-size 0.5s ease",
          margin: "30px 0",
        }}
      >
        {done ? "🪴" : "🌱"}
      </div>
      {/*Show the completed deed*/}
      {done && (
        <p style={{ textAlign: "center", fontSize: "1.5rem" }}>{doneDeed}</p>
      )}
      {/*select and set the deed to done*/}
      <button onClick={completeSetDeed}>
        {done ? "Done!" : "I did this!"}
      </button>
      <br />
      <br />
      <form
        onSubmit={(e) => {
          e.preventDefault(); // prevent page reload
          completeCustomDeed();
        }}
      >
        <input
          id="customDeed"
          type="text"
          placeholder="Enter a good deed you did today :)"
          value={newDeed}
          onChange={(e) => setNewDeed(e.target.value)}
        />
        <button type="submit">I did this!</button>
      </form>
      <br />
      <br />
      <button onClick={nextDeed}>Show me another deed</button>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
