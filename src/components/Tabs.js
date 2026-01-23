import React, { useState } from "react";

function Tabs({ activeTab, setActiveTab }) {
  return (
    <div>
      <button onClick={() => setActiveTab("today")}>Today</button>
      <button onClick={() => setActiveTab("calendar")}>Calendar</button>
    </div>
  );
}

export default Tabs;
