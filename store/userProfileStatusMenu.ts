import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface userProfileStatusMenuState {
  value: string;
  open: boolean;
}

const initialState: userProfileStatusMenuState = {
  value: "Online",
  open: false,
};

export const userProfileStatusMenuSlice = createSlice({
  name: "userProfileStatusMenu",
  initialState,
  reducers: {
    closeProfileStatusMenu: (state) => {
      state.open = false;
    },
    toggleProfileStatusMenu: (state) => {
      state.open = !state.open;
    },
    changeStatusValue: (state, action:PayloadAction<{value: string}>) => {
      state.value = action.payload.value;
    },
  },
});

export const { closeProfileStatusMenu, toggleProfileStatusMenu, changeStatusValue } =
  userProfileStatusMenuSlice.actions;

export default userProfileStatusMenuSlice.reducer;
