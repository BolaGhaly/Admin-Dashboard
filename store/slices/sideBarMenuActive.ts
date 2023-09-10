import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { sideBarMenu } from "../../utils/sideBarUtils";

export interface sideBarMenuActiveItemState {
  activeItem: string;
}

export const initialState: sideBarMenuActiveItemState = {
  activeItem: sideBarMenu[0],
};

export const sideBarMenuActiveItemSlice = createSlice({
  name: "sideBarMenuActiveItem",
  initialState,
  reducers: {
    changeActiveItem: (state, action: PayloadAction<{ activeItem: string }>) => {
      state.activeItem = action.payload.activeItem;
    },
  },
});

export const { changeActiveItem } = sideBarMenuActiveItemSlice.actions;

export default sideBarMenuActiveItemSlice.reducer;
