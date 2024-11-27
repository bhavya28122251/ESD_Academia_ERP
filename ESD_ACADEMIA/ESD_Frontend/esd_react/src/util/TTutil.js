import axios from 'axios';

export const fetchTimetable = async () => {
  const response = await axios.get('http://localhost:8080/api/v1/employee/courses');
  return response.data;
};
