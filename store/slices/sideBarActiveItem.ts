import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { sideBarMenuLinks } from "../../utils/sideBarUtils";

export interface sideBarActiveItemState {
  activeItem: string;
}

export const initialState: sideBarActiveItemState = {
  activeItem: sideBarMenuLinks[0],
};

export const sideBarActiveItemSlice = createSlice({
  name: "sideBarActiveItem",
  initialState,
  reducers: {
    changeActiveItem: (
      state,
      action: PayloadAction<{ activeItem: string }>
    ) => {
      state.activeItem = action.payload.activeItem;
    },
  },
});

export const { changeActiveItem } = sideBarActiveItemSlice.actions;

export default sideBarActiveItemSlice.reducer;
