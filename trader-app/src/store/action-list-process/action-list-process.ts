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
  },
  {
    currentAction: "SBER",
  }
]


export const actionListProcess = createSlice ({
  name:NAMESPACE.LIST,
  initialState,
  reducers:{
    changeCurrentAction: (state, action: {payload:string})=> {
      state[2].currentAction = action.payload;
    }
  },
  extraReducers(builder){
    builder
      .addCase(fetchActionList.fulfilled, (state, action)=> {
        state[1].securities = action.payload[1].securities;
      })
      .addCase(fetchActionList.rejected, (state)=> {
        state[1].securities = [];
      })
  }
});

export const {changeCurrentAction} = actionListProcess.actions;