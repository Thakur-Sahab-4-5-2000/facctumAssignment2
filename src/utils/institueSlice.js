import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const institueSlice = createSlice({
  name: "institute",
  initialState,
  reducers: {
    addInstitue: (state, action) => {
      console.log(action);
      state.push(...action.payload);
    },
  },
});

export const { addInstitue } = institueSlice.actions;

export default institueSlice.reducer;
