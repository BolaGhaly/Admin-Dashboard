import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./darkMode";
import openSideBarSlice from "./sideBar";

export const store = configureStore({
  reducer: { darkMode: darkModeSlice, openSideBar: openSideBarSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
