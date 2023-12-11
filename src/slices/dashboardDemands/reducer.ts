import { createSlice } from "@reduxjs/toolkit";
import { getDemandsChartsData, getDemandsStatusChartsData } from './thunk';

export const initialState = {
  projectData: [],
  projectStatusData: [],
  error: {}
};


const DashboardProjectSlice = createSlice({
  name: 'DashboardDemands',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDemandsChartsData.fulfilled, (state:any, action:any) => {
      state.projectData = action.payload;
    });
    builder.addCase(getDemandsChartsData.rejected, (state:any, action:any) => {
      state.error = action.payload.error || null;
    });

    builder.addCase(getDemandsStatusChartsData.fulfilled, (state:any, action:any) => {
      state.projectStatusData = action.payload;
    });
    builder.addCase(getDemandsStatusChartsData.rejected, (state:any, action:any) => {
      state.error = action.payload.error || null;
    });
  }
});

export default DashboardProjectSlice.reducer;