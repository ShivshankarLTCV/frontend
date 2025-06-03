// src/api.js
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "https://your-default-api.com";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// src/api.js
export const submitPincode = async (pincode) => {
    return await api.post("/pincode", { pincode });
  };
  
  export const submitEmploymentDetails = async (data) => {
    return await api.post("/employment", data);
  };
  
  export const fetchConfidenceScores = async () => {
    try {
      const response = await api.get("/user/confidence-scores"); // adjust the endpoint as needed
      return response.data; // expected to include { employmentConfidence, pincodeConfidence }
    } catch (error) {
      console.error("Error fetching confidence scores:", error);
      throw error;
    }
  };
  // Add more as needed
  
export default api;
