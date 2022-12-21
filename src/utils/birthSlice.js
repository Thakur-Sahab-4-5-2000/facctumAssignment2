import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  birth: [],
  institue: [],
  keyword: [],
  mentor: [],
  skills: [],
  capitals: [],
};

export const birthSlice = createSlice({
  name: "birth",
  initialState,
  reducers: {
    addBirth: (state, action) => {
      console.log(action);
      state[action.payload.key].push(...action.payload.data);
    },
  },
});

export const { addBirth } = birthSlice.actions;

export default birthSlice.reducer;
