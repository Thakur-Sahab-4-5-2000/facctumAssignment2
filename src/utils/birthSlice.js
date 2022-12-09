import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const birthSlice = createSlice({
  name: "birth",
  initialState,
  reducers: {
    addBirth: (state, action, index) => {
      console.log(index);
      console.log(action);
      state.push(...action.payload);
    },
  },
});

export const { addBirth } = birthSlice.actions;

export default birthSlice.reducer;
