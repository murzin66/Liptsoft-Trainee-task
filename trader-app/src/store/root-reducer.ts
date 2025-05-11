import {combineReducers} from '@reduxjs/toolkit';
import {NAMESPACE} from '../mocks/slice-headers';
import { actionListProcess } from './action-list-process/action-list-process';
import { actionPriceProcess } from './action-price-process/action-price-process';

export const rootReducer = combineReducers({
  [NAMESPACE.LIST]: actionListProcess.reducer,
  [NAMESPACE.PRICE]: actionPriceProcess.reducer,
});