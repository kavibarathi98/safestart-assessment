import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    login: (state, action) => {
      const input = action.payload.username;
      const isEmail = input.includes("@");
      state.user = {
        name: isEmail ? "User" : input,
        email: isEmail ? input : `${action.payload.username}@gmail.com`,
      };
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
