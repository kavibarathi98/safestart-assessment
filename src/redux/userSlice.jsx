import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  userPhone: null
};

const userSlice = createSlice({
  name: "user",
  initialState,

reducers: {
    login: (state, action) => {
        const input = action.payload.username;
        const isEmail = input.includes("@");
        state.user = { name: isEmail ? "User" : input, email: isEmail ? input :  `${action.payload.username}@gmail.com` };
        state.isAuthenticated = true;
        state.userPhone = '+91 7878787898';
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.userPhone = null;
    },
  },
});


export const { login, logout } = userSlice.actions;

export default userSlice.reducer;