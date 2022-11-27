import {combineReducers} from "@reduxjs/toolkit";

import theatre from "./slices/theatreSlice";
<<<<<<< HEAD
import opera from "./slices/operaSlice";
import concert from "./slices/concertSlice";
import clubs from "./slices/clubsSlice";

export const rootReducer = combineReducers({
    theatre,
    opera,
    concert,
    clubs
=======
import user from "./slices/userSlice";
import movie from "./slices/moviesSlice";


export const rootReducer = combineReducers({
    theatre,
    user,
    movie,
    
>>>>>>> da9e3368cc5895b2908b957c09fc660e653428db
})
