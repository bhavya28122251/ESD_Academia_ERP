import React, { useEffect, useState } from 'react';
import { fetchTimetable } from '../util/TTutil';
import TimeTableRow from '../components/TimeTableRow';
import '../CSS/TimeTable.css';
import Logout from '../components/Logout';

const TimeTable = () => {
  const [timetableData, setTimetableData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadTimetable = async () => {
      try {
        const data = await fetchTimetable();
        if (data) {
          setTimetableData(data);
        }
      } catch (err) {
        setError('Failed to fetch timetable.');
      }
    };

    loadTimetable();
  }, []);

  if (error) return <div className="error">{error}</div>;

  const dayNames = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday',
  };

  const groupedData = timetableData.reduce((acc, item) => {
    const day = item.courseSchedule.day;
    if (!acc[day]) {
      acc[day] = [];
    }
    acc[day].push(item);
    return acc;
  }, {});

  return (
    <>
      <div className="header">
        <h1>Faculty Timetable</h1>
        <div className="underline"></div>
        <Logout />
      </div>
      <div className="timetable-container">
        {Object.entries(groupedData).map(([day, lectures]) => (
          <div key={day} className="day-section">
            <div className="day-header">{dayNames[day]}</div>
            {lectures.map((lecture, index) => (
              <TimeTableRow key={index} lecture={lecture} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default TimeTable;
