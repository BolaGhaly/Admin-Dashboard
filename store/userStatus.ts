import { createSlice } from "@reduxjs/toolkit";

export interface userStatusState {
  value: string;
}

const initialState: userStatusState = {
  value: "online",
};

export const userStatusSlice = createSlice({
  name: "userStatus",
  initialState,
  reducers: {
    online: (state) => {
      state.value = "online";
    },
    away: (state) => {
      state.value = "away";
    },
    offline: (state) => {
      state.value = "offline";
    },
  },
});

export const { online, away, offline } = userStatusSlice.actions;

export default userStatusSlice.reducer;
