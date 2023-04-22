import { combineReducers, configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./slices/darkMode";
import openSideBarSlice from "./slices/sideBar";
import userProfileMenuSlice from "./slices/userProfileMenu";
import userProfileStatusMenuSlice from "./slices/userProfileStatusMenu";
import userNotificationsMenuSlice from "./slices/userNotificationsMenu";
import userLanguagesMenuSlice from "./slices/userLanguagesMenu";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    openSideBar: openSideBarSlice,
    darkMode: darkModeSlice,
    userNotificationsMenu: userNotificationsMenuSlice,
    userProfileMenu: userProfileMenuSlice,
    userProfileStatusMenu: userProfileStatusMenuSlice,
    userLanguagesMenu: userLanguagesMenuSlice,
  })
);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
