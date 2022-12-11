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

    }
})

export const { user, addOnlineContent } = userSlice.actions;

export const userSelector = state => state.user.user;

export default userSlice.reducer;