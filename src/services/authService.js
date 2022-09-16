/* eslint-disable no-useless-escape */
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
    const response = await axios.post(
      `${SERVER_URL}/api/users/register`,
      userData,
      { withCredentials: true }
    );
    if (response.statusText === "OK") {
      toast.success("Registered Successfully...");
    }
    return response.data;
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
    const response = await axios.post(
      `${SERVER_URL}/api/users/login`,
      userData,
      { withCredentials: true }
    );
    console.log(response);
    if (response.statusText === "OK") {
      toast.success("Login Successful...");
    }
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

// Logout User
export const logoutUser = async (userData) => {
  try {
    await axios.get(`${SERVER_URL}/api/users/logout`);
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
    // console.log(response);
    return response.data;
    // toast.success("Password Reset Successful...");
  } catch (error) {
    console.log(error);
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    toast.error(message);
  }
};

export const getLoginStatus = async () => {
  try {
    const response = await axios.get(`${SERVER_URL}/api/users/loggedin`);
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    console.log(message);
  }
};

export const getUser = async () => {
  try {
    const response = await axios.get(`${SERVER_URL}/api/users/getuser`);
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    console.log(message);
  }
};

export const changePassword = async (pass) => {
  try {
    const response = await axios.patch(
      `${SERVER_URL}/api/users/changepassword`,
      pass
    );
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};
