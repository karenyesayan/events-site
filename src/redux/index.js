import {combineReducers} from "@reduxjs/toolkit"

import theatre from "./slices/theatreSlice"
import online from "./slices/onlineSlice"
import user from "./slices/userSlice";
import selectEvent from "./slices/eventSlice";
import clubs from "./slices/clubsSlice";
import concert from "./slices/concertSlice";
import opera from "./slices/operaSlice";


export const rootReducer = combineReducers({
    theatre,
    user,
    selectEvent,
    clubs,
    concert,
    opera,
    online,
})
