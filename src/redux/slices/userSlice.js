import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    user: {}
   
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        user: (state, {payload}) => {
            state.user = payload
        }
        
    }
})

export const {user} = userSlice.actions;

export const userSelector = state => state.user.user;

export default userSlice.reducer;