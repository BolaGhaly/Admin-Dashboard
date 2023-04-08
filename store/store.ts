import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./darkMode";
import openSideBarSlice from "./sideBar";
import userStatusSlice from "./userStatus";

export const store = configureStore({
  reducer: {
    darkMode: darkModeSlice,
    openSideBar: openSideBarSlice,
    userStatus: userStatusSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
