import { createSlice } from "@reduxjs/toolkit";
import { NAMESPACE } from "../../mocks/slice-headers";
import { ActionList } from "../../types/state";

const initialState: ActionList = {
  securities: [],
}

export const actionListProcess = createSlice ({
  name:NAMESPACE.LIST,
  initialState,
  reducers:{},
  extraReducers(builder){

  }
})