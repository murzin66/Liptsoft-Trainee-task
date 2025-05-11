import {State} from "./index";
import { NAMESPACE } from "../mocks/slice-headers";
import { Action, ActionPrice, GraphInfo, SeriesInfo } from "../types/state";

export const getSecurities = (state:Pick <State, NAMESPACE.LIST>) : Action[] => state[NAMESPACE.LIST][1].securities;
export const getCurrentAction = (state:Pick <State, NAMESPACE.LIST>): string => state[NAMESPACE.LIST][2].currentAction;
export const getPrice = (state: Pick <State, NAMESPACE.PRICE>) : GraphInfo => state[NAMESPACE.PRICE].zones[0];