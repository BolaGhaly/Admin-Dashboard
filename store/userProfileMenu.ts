import { createSlice } from "@reduxjs/toolkit";

export interface userProfileMenuState {
  value: boolean;
}

const initialState: userProfileMenuState = {
  value: false,
};

export const userProfileMenuSlice = createSlice({
  name: "userProfileMenu",
  initialState,
  reducers: {
    closeProfileMenu: (state) => {
      state.value = false;
    },
    toggleProfileMenu: (state) => {
      state.value = !state.value;
    },
  },
});

export const { closeProfileMenu, toggleProfileMenu } = userProfileMenuSlice.actions;

export default userProfileMenuSlice.reducer;
