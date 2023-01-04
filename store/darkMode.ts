import { createSlice } from "@reduxjs/toolkit";

export interface darkModeState {
  value: boolean;
}

const initialState: darkModeState = {
  value: false,
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggledarkMode: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggledarkMode } =
  darkModeSlice.actions;

export default darkModeSlice.reducer;
