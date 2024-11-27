import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../CSS/TimeTable.css'; // CSS for styling

const Timetable = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const times = [
    '8:00 AM - 9:30 AM',
    '9:30 AM - 11:00 AM',
    '11:00 AM - 12:30 PM',
    '12:30 PM - 2:00 PM',
    '2:00 PM - 3:30 PM',
    '3:30 PM - 5:00 PM',
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Timetable</h2>
      <table className="table timetable">
        <thead>
          <tr>
            <th className="header"></th>
            {days.map((day, index) => (
              <th className="header" key={index}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {times.map((time, rowIndex) => (
            <tr key={rowIndex}>
              <td className="header">{time}</td>
              {days.map((day, colIndex) => (
                <td className="cell" key={colIndex}></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <h1 className="text-center mt-5">Bootstrap Test</h1>
      <button className="btn btn-primary">Test Button</button>
    </div>
  );
};

export default Timetable;
