import { createSlice } from "@reduxjs/toolkit";

export interface darkModeState {
  value: boolean;
}

const initialState: darkModeState = {
  value: false,
};

export const DarkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    off: (state) => {
      state.value = false;
    },
    on: (state) => {
      state.value = true;
    },
    reverseState: (state) => {
      state.value = !state.value;
    },
  },
});

export const { off, on, reverseState } = DarkModeSlice.actions;

export default DarkModeSlice.reducer;
