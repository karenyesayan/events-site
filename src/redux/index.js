import {combineReducers} from "@reduxjs/toolkit";

import theatre from "./slices/theatreSlice";
import user from "./slices/userSlice";
import movie from "./slices/moviesSlice";
import clubs from "./slices/clubsSlice";
import concert from "./slices/concertSlice";
import opera from "./slices/operaSlice";

export const rootReducer = combineReducers({
    theatre,
    user,
    movie,
    clubs,
    concert,
    opera
})
