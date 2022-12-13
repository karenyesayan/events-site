import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    selectedEvent: {}

}

const eventSlice = createSlice({
    name: 'eventSlice',
    initialState,
    reducers: {
        selectEvent: (state, { payload }) => {
            state.selectedEvent = payload
        }

    }
})

export const { selectEvent } = eventSlice.actions;

export const eventSelector = state => state.eventSlice.selectedEvent;

export default eventSlice.reducer;