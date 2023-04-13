import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./darkMode";
import openSideBarSlice from "./sideBar";
import userProfileStatusSlice from "./userProfileStatus";
import userProfileMenuSlice from "./userProfileMenu";
import userProfileStatusMenuSlice from "./userProfileStatusMenu";

export const store = configureStore({
  reducer: {
    darkMode: darkModeSlice,
    openSideBar: openSideBarSlice,
    userProfileMenu: userProfileMenuSlice,
    userProfileStatus: userProfileStatusSlice,
    userProfileStatusMenu: userProfileStatusMenuSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
