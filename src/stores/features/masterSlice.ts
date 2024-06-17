import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { masterDataApi } from "../../api";

export const getByKey = createAsyncThunk(
  "masterData/getByKey",
  async (key: string, { rejectWithValue }) => {
    const { succeed, data } = await masterDataApi.GetByKey({ key });
    if (!succeed) return;
    return data;
  }
);

const initialState = {
  entity: {},
  loading: true,
};

const masterDataSlice = createSlice({
  name: "masterData",
  initialState,
  reducers: {
    // normal,
  },
  extraReducers: (builder) => {
    builder.addCase(getByKey.fulfilled, (state, action) => {
      state.loading = false;
      state.entity = action.payload;
    });
  },
});

export const selectMaster = (state: any) => state.master;
export const selectMasterLoading = (state: any) => state.master.loading;

// Export reducer
export default masterDataSlice.reducer;
