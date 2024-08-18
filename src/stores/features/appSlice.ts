import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  searchText: "",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAppSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
  },
});

export const { setAppSearchText } = appSlice.actions;
export default appSlice.reducer;
