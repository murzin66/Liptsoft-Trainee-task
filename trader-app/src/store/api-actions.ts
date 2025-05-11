import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { ActionList, ActionPrice, AppDispatch, State } from "../types/state";

export const fetchActionList = createAsyncThunk <ActionList, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'actionList/fetchActionlist',
  async(_arg, {extra: api}) => {
    const {data} = await api.get<ActionList>("https://iss.moex.com/iss/engines/stock/markets/shares/boardgroups/57/securities.jsonp?iss.meta=off&iss.json=extended");
    return data;
  }
);

export const fetchActionPrice = createAsyncThunk <ActionPrice, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'actionPrice/fetchActionPrice',
  async(actionName, {extra:api}) => {
    const {data} = await api.get<ActionPrice>(`https://iss.moex.com/cs/engines/stock/markets/shares/boardgroups/57/securities/${actionName}.json?candles=72&interval=10`);
    return data;
  }
)