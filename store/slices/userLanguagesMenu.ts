import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface userLanguagesMenuState {
  value: string;
  open: boolean;
}

const initialState: userLanguagesMenuState = {
  value: "English",
  open: false,
};

export const userLanguagesMenuSlice = createSlice({
  name: "userLanguagesMenu",
  initialState,
  reducers: {
    closeLanguagesMenu: (state) => {
      state.open = false;
    },
    toggleLanguagesMenu: (state) => {
      state.open = !state.open;
    },
    changeLanguage: (state, action:PayloadAction<{language: string}>) => {
      state.value = action.payload.language;
    },
  },
});

export const { closeLanguagesMenu, toggleLanguagesMenu, changeLanguage } =
  userLanguagesMenuSlice.actions;

export default userLanguagesMenuSlice.reducer;
