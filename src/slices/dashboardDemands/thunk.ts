import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDemandsChartsData = createAsyncThunk("dashboardDemands", async (data: any) => {

  const allProjectData = [{
    name: 'Número de Demandas',
    type: 'bar',
    data: [34, 65, 46, 68, 49, 61, 42, 44, 78, 52, 63, 67]
  }, {
    name: 'Custo',
    type: 'area',
    data: [89.25, 98.58, 68.74, 108.87, 77.54, 84.03, 51.24, 28.57, 92.57, 42.36, 88.51, 36.57]
  }, {
    name: 'Demandas Ativas',
    type: 'bar',
    data: [8, 12, 7, 17, 21, 11, 5, 9, 7, 29, 12, 35]
  }];

  const monthProjectData = [{
    name: 'Número de Demandas',
    type: 'bar',
    data: [14, 45, 56, 78, 79, 81, 62, 44, 88, 52, 63, 87]
  }, {
    name: 'Custo',
    type: 'area',
    data: [119.25, 128.58, 148.74, 148.87, 17.54, 154.03, 71.24, 78.57, 92.57, 42.36, 88.51, 76.57]
  }, {
    name: 'Demandas Ativas',
    type: 'bar',
    data: [18, 22, 17, 47, 71, 31, 5, 9, 7, 29, 22, 75]
  }];

  const halfyearProjectData = [{
    name: 'Número de Demandas',
    type: 'bar',
    data: [34, 75, 66, 78, 29, 41, 32, 44, 58, 22, 43, 77]
  }, {
    name: 'Custo',
    type: 'area',
    data: [109.25, 48.58, 38.74, 78.87, 57.54, 44.03, 21.24, 18.57, 92.57, 42.36, 48.51, 56.57]
  }, {
    name: 'Demandas Ativas',
    type: 'bar',
    data: [38, 22, 27, 47, 61, 41, 15, 89, 27, 49, 32, 75]
  }];

  const yearProjectData = [{
    name: 'Número de Demandas',
    type: 'bar',
    data: [14, 45, 16, 38, 29, 21, 12, 14, 58, 22, 23, 47]
  }, {
    name: 'Custo',
    type: 'area',
    data: [59.25, 68.58, 48.74, 78.87, 57.54, 64.03, 21.24, 18.57, 52.57, 22.36, 68.51, 16.57]
  }, {
    name: 'Demandas Ativas',
    type: 'bar',
    data: [38, 32, 27, 37, 41, 51, 35, 29, 17, 59, 32, 45]
  }];

  try {
    var response;
    if (data === "all") {
      response = allProjectData;
    }
    if (data === "month") {
      response = monthProjectData;
    }
    if (data === "halfyear") {
      response = halfyearProjectData;
    }
    if (data === "year") {
      response = yearProjectData;
    }
    return response;
  } catch (error) {
    return error;
  }
});

export const getDemandsStatusChartsData = createAsyncThunk("dashboardDemandsStatus", async (data: any) => {
  const allTimeData = [225, 152, 178, 189];

  const lastWeekData = [145, 62, 68, 79];

  const lastMonthData = [155, 82, 78, 99];

  const lastquarterData = [185, 142, 158, 149];

  try {
    var response;
    if (data === "Todo Período") {
      response = allTimeData;
    }
    if (data === "Últimos 7 Dias") {
      response = lastWeekData;
    }
    if (data === "Últimos 30 Dias") {
      response = lastMonthData;
    }
    if (data === "Últimos 90 Dias") {
      response = lastquarterData;
    }
    return response;
  } catch (error) {
    return error;
  }
});