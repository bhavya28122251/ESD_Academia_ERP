import axios from 'axios';

export const fetchTimetable = async () => {
  const token = localStorage.getItem("jwtToken");  // Get token from localStorage or session
  if (!token) {
    console.error("User is not logged in");
    return;
  }

  try {
    const response = await axios.get("http://localhost:8080/api/v1/employee/courses", {
      headers: {
        'Authorization': `Bearer ${token}`,  // Pass the token in the Authorization header
      },
    });
    console.log("Timetable data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching timetable:", error);
  }
};