import { combineReducers, legacy_createStore } from "redux";
import {reducer as sofaReducer} from "./SofaRedux/reducer";
import {reducer as cartReducer} from "./CartRedux/reducer";
import { authReducer } from './AuthReducer/reducer';

const rootReducer = combineReducers({auth:authReducer,sofaReducer, cartReducer});


export const store = legacy_createStore(rootReducer);