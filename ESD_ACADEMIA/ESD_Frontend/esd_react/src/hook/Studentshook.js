// hooks/useStudentsDetails.js
import { useEffect, useState } from 'react';
import Student from '../model/Studentsmodel';
import { fetchStudentsByCourse } from '../util/Studentsutil';

const useStudentsDetails = (courseId) => {
  const [students, setStudents] = useState([]);
  const token = localStorage.getItem('jwtToken');

  useEffect(() => {
    const fetchStudents = async () => {
      console.log("Fetching students for courseId:", courseId); // Debug courseId
      console.log("Token:", token); // Debug token

      const studentsData = await fetchStudentsByCourse(courseId, token);
      console.log("Raw students data from API:", studentsData); // Debug API data

      const studentObjects = studentsData
        .filter(student => student !== null && student !== undefined) // Filter null/undefined
        .map(student => new Student(student.rollNumber, student.firstName, student.lastName, student.email));
      console.log("Mapped students:", studentObjects); // Debug final student objects

      setStudents(studentObjects);
    };

    fetchStudents();
  }, [courseId, token]);

  console.log("Final students state:", students); // Debug students state
  return students;
};

export default useStudentsDetails;
