import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../store/user/userSlice";
export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
