import axios from "axios";  

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post("http://localhost:8080/api/v1/auth/employee", {
      email,
      password,
    });
    return response.data.jwt; // Return JWT token
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};
