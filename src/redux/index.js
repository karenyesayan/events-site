import {combineReducers} from "@reduxjs/toolkit";

import theatre from "./slices/theatreSlice";
import opera from "./slices/operaSlice";
import concert from "./slices/concertSlice";
import clubs from "./slices/clubsSlice";

export const rootReducer = combineReducers({
    theatre,
    opera,
    concert,
    clubs
})
