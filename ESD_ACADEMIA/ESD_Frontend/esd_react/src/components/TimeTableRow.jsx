import React from 'react';
import '../CSS/TimeTableRow.css';

const TimeTableRow = ({ lecture }) => {
  const { course, time, room } = lecture.courseSchedule;
  const { specialisation } = lecture;
  //alert("----------row-");
  return (
    <div className="row lecture-row">
      <div className="col">{time}:00</div>
      <div className="col">{course.name}</div>
      <div className="col">{specialisation}</div>
      <div className="col">{room}</div>
    </div>
  );
};

export default TimeTableRow;
