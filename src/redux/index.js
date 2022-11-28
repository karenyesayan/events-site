import {combineReducers} from "@reduxjs/toolkit";

import theatre from "./slices/theatreSlice";
import other from "./slices/otherSlice"

export const rootReducer = combineReducers({
    theatre,
    other,
})
