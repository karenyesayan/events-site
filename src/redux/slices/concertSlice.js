import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    concertEvent: {}
}

const concertSlice = createSlice({
    name: 'concert',
    initialState,
    reducers: {
        setConcertEvent: (state, {payload}) => {
            state.concertEvent = payload
        }
    }
})

export const {setConcertEvent} = concertSlice.actions

export const concertEventSelector = state => state.concert.concertEvent


export default concertSlice.reducer
