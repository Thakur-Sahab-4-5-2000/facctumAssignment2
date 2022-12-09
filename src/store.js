import { configureStore } from "@reduxjs/toolkit";
import birthReducer from "./utils/birthSlice";
import keywordReducer from "./utils/keywordSlice";
import institueReducer from "./utils/institueSlice";

export const store = configureStore({
  reducer: {
    birth: birthReducer,
    keyword: keywordReducer,
    institute: institueReducer,
  },
});
