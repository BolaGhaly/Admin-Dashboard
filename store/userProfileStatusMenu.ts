import { createSlice } from "@reduxjs/toolkit";

export interface userProfileStatusMenuState {
  value: boolean;
}

const initialState: userProfileStatusMenuState = {
  value: false,
};

export const userProfileStatusMenuSlice = createSlice({
  name: "userProfileStatusMenu",
  initialState,
  reducers: {
    closeProfileStatusMenu: (state) => {
      state.value = false;
    },
    toggleProfileStatusMenu: (state) => {
      state.value = !state.value;
    },
  },
});

export const { closeProfileStatusMenu, toggleProfileStatusMenu } =
  userProfileStatusMenuSlice.actions;

export default userProfileStatusMenuSlice.reducer;
