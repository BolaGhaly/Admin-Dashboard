import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./darkMode";
import openSideBarSlice from "./sideBar";
import userProfileStatusSlice from "./userProfileStatus";
import userProfileMenuSlice from "./userProfileMenu";

export const store = configureStore({
  reducer: {
    darkMode: darkModeSlice,
    openSideBar: openSideBarSlice,
    userProfileStatus: userProfileStatusSlice,
    userProfileMenu: userProfileMenuSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
