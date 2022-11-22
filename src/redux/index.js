import {combineReducers} from "@reduxjs/toolkit";

import theatre from "./slices/theatreSlice";
import user from "./slices/userSlice";


export const rootReducer = combineReducers({
    theatre,
    user,
    
})
