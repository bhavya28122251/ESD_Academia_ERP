import React from 'react';
import { useParams } from 'react-router-dom';
import useStudentsDetails from '../hook/Studentshook';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/StudentsDisplay.css'; // Import custom CSS

const StudentsDisplay = () => {
  const { courseId } = useParams(); 
  //const {courseCode}=useParams;
  const students = useStudentsDetails(courseId);

  // Filter out null or undefined students
  const validStudents = students.filter(student => student !== null && student !== undefined);

  return (
    <div className="container mt-5">
      
      <h1 className="text-center mb-4">Students Enrolled in Course {courseId}</h1>
      {validStudents.length > 0 ? (
        <div className="list-group cont">
          {validStudents.map((student) => (
            <div key={student.rollNumber} className="list-group-item">
              ({student.rollNumber}) {student.firstName} {student.lastName} - {student.email}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No students enrolled.</p>
      )}
    </div>
  );
};

export default StudentsDisplay;