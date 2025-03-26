import axios from "axios";

// Backend server URL
const API_URL = "https://login-prajwal-chaudharis-projects.vercel.app";

// Register User
export const registerUser = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      username,
      email,
      password,
    });
    return response.data?.message || "Registration successful";
  } catch (error) {
    return error.response?.data?.error || "Something went wrong";
  }
};

//Login User
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    console.log("Login API Response:", response.data); // ✅ Log the response
    return {
      message:response.data?.message || "Login successful",
      user:response.data?.user
    };
  } catch (error) {
    console.error("Login Error:", error.response?.data); // ✅ Log error response
    return error.response?.data || "Invalid credentials"; // 🔄 Return full response
  }
};


// Logout User
export const logoutUser = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/logout`, { email });
    return response.data?.message || "Logout successful";
  } catch (error) {
    return error.response?.data?.error || "Logout failed";
  }
};
