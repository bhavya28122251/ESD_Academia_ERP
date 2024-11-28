// utils/httputils.js
export const fetchStudentsByCourse = async (courseId, token) => {
  try {
    console.log("courseID: ", courseId);
    console.log("API Request URL:", `http://localhost:8080/api/v1/course/${courseId}/students`); // Debug URL
    console.log("Token being sent:", token); // Debug token

    const response = await fetch(`http://localhost:8080/api/v1/course/${courseId}/students`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
     // Debug response status
    console.log("API Response Status:", response.status); // Debug response status
    console.log("API Raw Response Text:", await response.clone().text()); // Debug raw response

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching students:', error);
    return [];
  }
};
