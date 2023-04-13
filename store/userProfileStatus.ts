import { createSlice } from "@reduxjs/toolkit";

export interface userProfileStatusState {
  value: string;
}

const initialState: userProfileStatusState = {
  value: "online",
};

export const userProfileStatusSlice = createSlice({
  name: "userProfileStatus",
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

export const { online, away, offline } = userProfileStatusSlice.actions;

export default userProfileStatusSlice.reducer;
