import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/TimeTableRow.css';

const TimeTableRow = ({ lecture }) => {
  const { course, time, room } = lecture.courseSchedule;
  const { specialisation } = lecture;
  const navigate = useNavigate();

  const handleRowClick = () => {
    // Navigate to the student list page with the course ID
    navigate(`/course/${course.courseCode}/students`);
  };

  return (
    <div className="row lecture-row" onClick={handleRowClick} style={{ cursor: 'pointer' }}>
      <div className="col">{time}:00</div>
      <div className="col">{course.name}</div>
      <div className="col">{specialisation}</div>
      <div className="col">{room}</div>
    </div>
  );
};

export default TimeTableRow;
