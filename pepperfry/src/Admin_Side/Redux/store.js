import { applyMiddleware, legacy_createStore } from "redux";
import { reducer } from "./ProductReducer/reducer";
import thunk from "redux-thunk";

const store = legacy_createStore(reducer, applyMiddleware(thunk));

export { store };