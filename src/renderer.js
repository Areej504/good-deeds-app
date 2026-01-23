import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Tabs from "./components/Tabs";
import TodayTab from "./components/TodayTab";
import CalendarTab from "./components/CalendarTab.js";

function App() {
  const [activeTab, setActiveTab] = useState("today");
  return (
    <div>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "today" && <TodayTab />}
      {activeTab === "calendar" && <CalendarTab />}
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
