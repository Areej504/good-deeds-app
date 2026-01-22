import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h2>🌱 Today’s Good Deed</h2>
      <p>Smile intentionally today.</p>

      <button>I did this</button>
      <br />
      <br />
      <button>I did something else</button>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
