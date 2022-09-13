import { createSlice } from "@reduxjs/toolkit";

// Get LoggedIn status from localStorage
// const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
const name = JSON.parse(localStorage.getItem("name"));

const initialState = {
  isLoggedIn: false,
  name: name ? name : "",
  user: {
    name: "",
    email: "",
    phone: "",
    bio: "",
    photo: "",
  },
  userID: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_LOGIN(state, action) {
      // console.log(action.payload);
      // localStorage.setItem("isLoggedIn", JSON.stringify(action.payload));
      state.isLoggedIn = action.payload;
    },
    SET_NAME(state, action) {
      // console.log(action.payload);
      localStorage.setItem("name", JSON.stringify(action.payload));
      state.name = action.payload;
    },
    SAVE_USER(state, action) {
      const profile = action.payload;
      // console.log(profile);
      state.user.name = profile.name;
      state.user.email = profile.email;
      state.user.phone = profile.phone;
      state.user.bio = profile.bio;
      state.user.photo = profile.photo;
    },
  },
});

export const { SET_LOGIN, SET_NAME, SAVE_USER } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectName = (state) => state.auth.name;
export const selectUser = (state) => state.auth.user;
export const selectUserID = (state) => state.auth.userID;

export default authSlice.reducer;
