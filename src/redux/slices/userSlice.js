import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: {}
    
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        user: (state, { payload }) => {
            state.user = payload
        },
        addOnlineContent: (state, { payload }) => {
            state.user.selectedOnlineContent = [payload,...state.user.selectedOnlineContent]
        },
        addEventToUser: (state, { payload }) => {
            state.user.selectedEvents = [payload, ...state.user.selectedEvents]
        },

    }
})

export const { user, addOnlineContent, addEventToUser } = userSlice.actions;

export const userSelector = state => state.user.user;
export const userEventsSelector = state => state.user.user.selectedEvents;
export const userOnlineContentSelector = state => state.user.user.selectedOnlineContent;

export default userSlice.reducer;