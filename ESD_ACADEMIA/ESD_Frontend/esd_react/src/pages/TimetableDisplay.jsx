import React, { useEffect, useState } from "react";
import { fetchTimetable } from "../util/TTutil";
import TimeTableRow from "../components/TimeTableRow";
import "../CSS/TimeTable.css";
import Logo from "../components/Navbar";

const TimeTable = () => {
  const [timetableData, setTimetableData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadTimetable = async () => {
      try {
        const data = await fetchTimetable();
        if (data) {
          setTimetableData(data);
        }
      } catch (err) {
        setError("Failed to fetch timetable.");
      }
    };

    loadTimetable();
  }, []);

  if (error) return <div className="error">{error}</div>;

  const groupedData = timetableData.reduce((acc, item) => {
    const day = item.courseSchedule.day;
    if (!acc[day]) {
      acc[day] = [];
    }
    acc[day].push(item);
    return acc;
  }, {});

  return (
    <div className="timetable-container">
      <Logo />
      <h1>Time Table</h1>
      {Object.entries(groupedData).map(([day, lectures]) => (
        <div key={day} className="day-section">
          <div className="day-header">{`Day ${day}`}</div>
          {lectures.map((lecture, index) => (
            <TimeTableRow key={index} lecture={lecture} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default TimeTable;
