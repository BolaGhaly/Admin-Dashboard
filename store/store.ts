import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./darkMode";
import openSideBarSlice from "./sideBar";
import userProfileStatusSlice from "./userProfileStatus";
import userProfileMenuSlice from "./userProfileMenu";
import userProfileStatusMenuSlice from "./userProfileStatusMenu";
import userNotificationsMenuSlice from "./userNotificationsMenu";
import userLanguagesMenuSlice from "./userLanguagesMenu";

export const store = configureStore({
  reducer: {
    openSideBar: openSideBarSlice,
    darkMode: darkModeSlice,
    userNotificationsMenu: userNotificationsMenuSlice,
    userProfileMenu: userProfileMenuSlice,
    userProfileStatusMenu: userProfileStatusMenuSlice,
    userProfileStatus: userProfileStatusSlice,
    userLanguagesMenu: userLanguagesMenuSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
