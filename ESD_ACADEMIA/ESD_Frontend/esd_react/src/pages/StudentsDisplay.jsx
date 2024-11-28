import React from 'react';
import { useParams } from 'react-router-dom';
import useStudentsDetails from '../hook/Studentshook';
import '../CSS/StudentsDisplay.css';

const StudentsDisplay = () => {
  const { courseId } = useParams(); 
  const students = useStudentsDetails(courseId);

  // Filter out null or undefined students
  const validStudents = students.filter(student => student !== null && student !== undefined);

  return (
    <>
      <div className="header">
        <h1>Students Enrolled</h1>
        <div className="underline"></div>
      </div>
      <div className="container">
        <h2 className="course-title">Course ID: {courseId}</h2>
        {validStudents.length > 0 ? (
          <div className="students-list">
            {validStudents.map((student) => (
              <div key={student.rollNumber} className="student-item">
                <span className="student-roll">({student.rollNumber})</span>
                <span className="student-name">{student.firstName} {student.lastName}</span>
                <span className="student-email"> - {student.email}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-students">No students are currently enrolled in this course.</p>
        )}
      </div>
    </>
  );
};

export default StudentsDisplay;
