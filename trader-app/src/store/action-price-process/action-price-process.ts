import { createSlice } from "@reduxjs/toolkit";
import { NAMESPACE } from "../../mocks/slice-headers";
import { ActionPrice } from "../../types/state";
import { fetchActionPrice } from "../api-actions";

const initialState: ActionPrice = {
  canvas: {
    width:0,
    height:0
  },
  zones: [],
}

export const actionPriceProcess = createSlice ({
  name:NAMESPACE.PRICE,
  initialState,
  reducers:{},
  extraReducers(builder){
    builder
      .addCase(fetchActionPrice.fulfilled, (state, action) => {
        state.zones = action.payload.zones;
      })
      .addCase(fetchActionPrice.rejected, (state)=> {
        state.zones = [];
      })
  }
})