import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/StudentsDisplay.css'; // Import custom CSS

const StudentsDisplay = () => {
  const { courseId } = useParams(); // Access the courseId from the route
  const [students, setStudents] = useState([]);
  const token = localStorage.getItem('jwtToken'); // Retrieve the JWT token from local storage

  useEffect(() => {
    fetch(`http://localhost:8080/api/v1/course/${courseId}/students`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Include the JWT token in the Authorization header
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setStudents(data))
      .catch((error) => console.error('Error fetching students:', error));
  }, [courseId, token]);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Students Enrolled in Course {courseId}</h1>
      {students.length > 0 ? (
        <ul className="list-group cont">
          {students.map((student) => (
            <li key={student.rollNumber} className="list-group-item">
              {student.firstName} {student.lastName} - {student.email}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center">No students enrolled.</p>
      )}
    </div>
  );
};

export default StudentsDisplay;