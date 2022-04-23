import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  users: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state) => {
      state.loading = true;
    },
    getUsersSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    getUsersFailure: (state) => {
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getUsers, getUsersFailure, getUsersSuccess } =
  usersSlice.actions;

export default usersSlice.reducer;
