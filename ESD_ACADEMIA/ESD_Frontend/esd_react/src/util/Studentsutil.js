export const fetchStudentsByCourse = async (courseId, token) => {
  try {
  
    const response = await fetch(`http://localhost:8080/api/v1/course/${courseId}/students`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

     
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching students:', error);
    return [];
  }
};
