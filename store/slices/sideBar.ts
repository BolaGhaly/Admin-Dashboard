import { createSlice } from "@reduxjs/toolkit";

export interface openSideBarState {
  value: boolean;
}

const initialState: openSideBarState = {
  value: false,
};

export const openSideBarSlice = createSlice({
  name: "openSideBar",
  initialState,
  reducers: {
    openSideBarOff: (state) => {
      state.value = false;
    },
    openSideBarReverse: (state) => {
      state.value = !state.value;
    },
  },
});

export const { openSideBarOff, openSideBarReverse } = openSideBarSlice.actions;

export default openSideBarSlice.reducer;
