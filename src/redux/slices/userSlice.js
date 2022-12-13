import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: {}

}

const userSlice = createSlice({
    name: 'userSlice',
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
        }

    }
})

export const { user, addOnlineContent, addEventToUser } = userSlice.actions;

export const userSelector = state => state.user.user;
export const userEventsSelector = state => state.user.user.addEventToUser;

export default userSlice.reducer;