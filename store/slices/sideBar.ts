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
    closeSideBar: (state) => {
      state.value = false;
    },
    toggleSideBar: (state) => {
      state.value = !state.value;
    },
  },
});

export const { closeSideBar, toggleSideBar } = openSideBarSlice.actions;

export default openSideBarSlice.reducer;
