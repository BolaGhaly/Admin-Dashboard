import { createSlice } from "@reduxjs/toolkit";

export interface userNotificationsMenuState {
  value: boolean;
}

const initialState: userNotificationsMenuState = {
  value: false,
};

export const userNotificationsMenuSlice = createSlice({
  name: "userNotificationsMenu",
  initialState,
  reducers: {
    closeNotificationsMenu: (state) => {
      state.value = false;
    },
    toggleNotificationsMenu: (state) => {
      state.value = !state.value;
    },
  },
});

export const { closeNotificationsMenu, toggleNotificationsMenu } =
  userNotificationsMenuSlice.actions;

export default userNotificationsMenuSlice.reducer;
