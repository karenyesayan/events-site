import {combineReducers} from "@reduxjs/toolkit";

import theatre from "./slices/theatreSlice";
import user from "./slices/userSlice";
import movie from "./slices/moviesSlice";


export const rootReducer = combineReducers({
    theatre,
    user,
    movie,
    
})
