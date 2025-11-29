import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import managerReducer from "../features/admin/manager/managerSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    managers: managerReducer,
  },
});

export default store;
