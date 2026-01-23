import React from "react";

function ProgressVisual({ done, deedText }) {
  return (
    <div style={{ textAlign: "center", margin: "30px 0" }}>
      <div
        style={{
          fontSize: done ? "6rem" : "3rem",
          transition: "font-size 0.5s ease",
        }}
      >
        {done ? "🪴" : "🌱"}
      </div>
      {done && (
        <p style={{ fontSize: "1.5rem", marginTop: "10px" }}>{deedText}</p>
      )}
    </div>
  );
}

export default ProgressVisual;
