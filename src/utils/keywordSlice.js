import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const KeywordSlice = createSlice({
  name: "keyword",
  initialState,
  reducers: {
    addkeyword: (state, action) => {
      console.log(action);
      state.push(...action.payload);
    },
  },
});

export const { addkeyword } = KeywordSlice.actions;

export default KeywordSlice.reducer;
