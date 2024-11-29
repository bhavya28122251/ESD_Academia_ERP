
import { useEffect, useState } from 'react';
import Student from '../model/Studentsmodel';
import { fetchStudentsByCourse } from '../util/Studentsutil';

const useStudentsDetails = (courseId) => {
  const [students, setStudents] = useState([]);
  const token = localStorage.getItem('jwtToken');

  useEffect(() => {
    const fetchStudents = async () => {

      const studentsData = await fetchStudentsByCourse(courseId, token);
      
      const studentObjects = studentsData
        .filter(student => student !== null && student !== undefined) 
        .map(student => new Student(student.rollNumber, student.firstName, student.lastName, student.email));
  
      setStudents(studentObjects);
    };

    fetchStudents();
  }, [courseId, token]);

  return students;
};

export default useStudentsDetails;