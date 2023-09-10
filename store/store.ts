import { combineReducers, configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./slices/darkMode";
import openSideBarSlice from "./slices/sideBar";
import sideBarMenuActiveItemSlice from "./slices/sideBarMenuActive";
import userProfileMenuSlice from "./slices/userProfileMenu";
import userProfileStatusMenuSlice from "./slices/userProfileStatusMenu";
import userNotificationsMenuSlice from "./slices/userNotificationsMenu";
import userLanguagesMenuSlice from "./slices/userLanguagesMenu";
import { persistStore, persistReducer } from "redux-persist";
import { getPersistConfig } from "redux-deep-persist";
import storage from "./storage";

const rootReducer = combineReducers({
  openSideBar: openSideBarSlice,
  darkMode: darkModeSlice,
  sideBarMenuActiveItem: sideBarMenuActiveItemSlice,
  userNotificationsMenu: userNotificationsMenuSlice,
  userProfileMenu: userProfileMenuSlice,
  userProfileStatusMenu: userProfileStatusMenuSlice,
  userLanguagesMenu: userLanguagesMenuSlice,
});

const persistConfig = getPersistConfig({
  key: "root",
  storage,
  blacklist: [
    "openSideBar",
    "userNotificationsMenu",
    "userProfileMenu",
    "userLanguagesMenu.open",
    "userProfileStatusMenu.open",
  ],
  rootReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
