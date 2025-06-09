import api from "./axios";

export const generateOtp = async (phoneNumber) => {
  try {
    const response = await api.post("/v1/auth/generate", { phoneNumber });
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const verifyOtp = async (token, otp) => {
  try {
    const response = await api.post("/v1/auth/verify", { token, otp });
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const resendOtp = async (token, phoneNumber) => {
  try {
    const response = await api.post("/v1/auth/resend", {token, phoneNumber });
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};