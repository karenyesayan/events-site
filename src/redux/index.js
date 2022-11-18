import {combineReducers} from "@reduxjs/toolkit";

import theatre from "./slices/theatreSlice";


export const rootReducer = combineReducers({
    theatre
})
