import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    clubsEvent: {}
}

const clubsSlice = createSlice({
    name: 'clubs',
    initialState,
    reducers: {
        setClubsEvent: (state, {payload}) => {
            state.clubsEvent = payload
        }
    }
})

export const {setClubsEvent} = clubsSlice.actions

export const clubsEventSelector = state => state.clubs.clubsEvent

export default clubsSlice.reducer
