import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./userSlice";

const store = configureStore({
  reducer: {
    user: UserSlice.reducer,
  },
});

export default store;
