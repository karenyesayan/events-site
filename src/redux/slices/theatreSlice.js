import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    theatreEvent: {}
}

const theatreSlice = createSlice({
    name: 'theatre',
    initialState,
    reducers: {
        setTheatreEvent: (state, {payload}) => {
            state.theatreEvent = payload
        }
    }
})

export const {setTheatreEvent} = theatreSlice.actions

export const theatreEventSelector = state => state.theatre.theatreEvent

export default theatreSlice.reducer
