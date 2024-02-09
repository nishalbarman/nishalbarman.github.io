import { combineReducers, legacy_createStore } from "redux";
import { referReducer } from "./smoothscroll/reducer";

const reducer = combineReducers({
  refer_reducer: referReducer,
});

export const store = legacy_createStore(reducer);
