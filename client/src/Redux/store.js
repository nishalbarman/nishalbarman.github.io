import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { referReducer } from "./smoothscroll/reducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
  refer_reducer: referReducer,
});

export const store = legacy_createStore(reducer);
