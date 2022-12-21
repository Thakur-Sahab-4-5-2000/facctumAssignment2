import { configureStore } from "@reduxjs/toolkit";
import birthReducer from "./utils/birthSlice";

export const store = configureStore({
  reducer: {
    birth: birthReducer,
  },
});
