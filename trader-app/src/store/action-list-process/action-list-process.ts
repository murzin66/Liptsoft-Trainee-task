import { createSlice } from "@reduxjs/toolkit";
import { NAMESPACE } from "../../mocks/slice-headers";
import { ActionList } from "../../types/state";
import { fetchActionList } from "../api-actions";

const initialState: ActionList = [
  {
    charsetinfo: ""
  },
  {
    securities: [],
  }

]


export const actionListProcess = createSlice ({
  name:NAMESPACE.LIST,
  initialState,
  reducers:{},
  extraReducers(builder){
    builder
      .addCase(fetchActionList.fulfilled, (state, action)=> {
        state[1].securities = action.payload[1].securities;
      })
      .addCase(fetchActionList.rejected, (state)=> {
        state[1].securities = [];
      })
  }
})