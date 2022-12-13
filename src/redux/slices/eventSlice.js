import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    selectEvent: {}

}

const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        selectEvent: (state, { payload }) => {
            state.selectEvent = payload
        }

    }
})

export const { selectEvent } = eventSlice.actions;

export const eventSelector = state => state.event.selectEvent;

export default eventSlice.reducer;