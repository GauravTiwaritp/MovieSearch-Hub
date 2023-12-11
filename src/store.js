import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./Features/home/homeSlice";
export const store = configureStore({
  reducer: {
    home: homeSlice,
  },
});
