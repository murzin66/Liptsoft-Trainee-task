import { createSlice } from "@reduxjs/toolkit";
import { NAMESPACE } from "../../mocks/slice-headers";
import { ActionPrice } from "../../types/state";

const initialState: ActionPrice = {
  series:{
    candles: []
  },
}

export const actionPriceProcess = createSlice ({
  name:NAMESPACE.PRICE,
  initialState,
  reducers:{},
  extraReducers(builder){

  }
})