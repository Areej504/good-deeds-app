import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Tabs from "./components/Tabs";
import TodayTab from "./components/TodayTab";
import CalendarTab from "./components/CalendarTab.js";

function App() {
  const [deedsByDate, setDeedsByDate] = useState(
    () => JSON.parse(localStorage.getItem("deedsByDate")) || {},
  );

  useEffect(() => {
    localStorage.setItem("deedsByDate", JSON.stringify(deedsByDate));
  }, [deedsByDate]);

  const [activeTab, setActiveTab] = useState("today");
  return (
    <div>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "today" && <TodayTab setDeedsByDate={setDeedsByDate} />}
      {activeTab === "calendar" && <CalendarTab deedsByDate={deedsByDate} />}
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
