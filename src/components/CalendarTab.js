import React, { useState } from "react";

function getDaysInMonth(year, month) {
  const date = new Date(year, month, 1);
  const days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date)); // push Date objects
    date.setDate(date.getDate() + 1);
  }
  return days;
}

function CalendarTab({ deedsByDate }) {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const days = getDaysInMonth(year, month);

  const handleClickDay = (dateStr) => {
    const deeds = deedsByDate[dateStr] || [];
    if (deeds.length === 0) {
      alert(`No deeds recorded for ${dateStr}`);
      return;
    }
    alert(`Deeds for ${dateStr}:\n- ${deeds.join("\n- ")}`);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>📅 My Calendar</h2>

      <div style={{ display: "flex", flexWrap: "wrap", maxWidth: "300px" }}>
        {days.map((day) => {
          const dateStr = day.toISOString().split("T")[0];
          const hasDeeds =
            deedsByDate[dateStr] && deedsByDate[dateStr].length > 0;

          return (
            <div
              key={dateStr}
              onClick={() => handleClickDay(dateStr)}
              style={{
                width: "40px",
                height: "40px",
                margin: "2px",
                textAlign: "center",
                lineHeight: "40px",
                border: "1px solid #ccc",
                cursor: "pointer",
                backgroundColor: hasDeeds ? "#d4edda" : "#f8f9fa",
              }}
            >
              {hasDeeds ? "🪴" : day.getDate()}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CalendarTab;
