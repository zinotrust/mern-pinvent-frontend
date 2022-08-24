import axios from "axios";
import { toast } from "react-toastify";
import { SERVER_URL } from "../App";

// Validate Email
export const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

// Register User
export const registerUser = async (userData) => {
  try {
    const { data } = await axios.post(
      `${SERVER_URL}/api/users/register`,
      userData,
      { withCredentials: true }
    );
    console.log(data);
    toast.success("Registered Successfully...");
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

// Login User
export const loginUser = async (userData) => {
  try {
    const { data } = await axios.post(
      `${SERVER_URL}/api/users/login`,
      userData,
      { withCredentials: true }
    );
    console.log(data);
    toast.success("Login Successful...");
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

// Forgot Password
export const forgotPassword = async (email) => {
  try {
    const response = await axios.post(
      `${SERVER_URL}/api/users/forgotpassword`,
      email,
      { withCredentials: true }
    );
    console.log(response);
    toast.success("Reset Email Sent");
  } catch (error) {
    console.log(error);
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    toast.error(message);
  }
};
// Reset Password
export const resetPassword = async (password, resetToken) => {
  try {
    const response = await axios.put(
      `${SERVER_URL}/api/users/resetpassword/${resetToken}`,
      password
    );
    console.log(response);
    toast.success("Password Reset Successful...");
  } catch (error) {
    console.log(error);
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    toast.error(message);
  }
};
