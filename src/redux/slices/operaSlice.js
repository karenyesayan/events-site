import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    operaEvent: {}
}

const operaSlice = createSlice({
    name: 'opera',
    initialState,
    reducers: {
        setOperaEvent: (state, {payload}) => {
            state.operaEvent = payload
        }
    }
})

export const {setOperaEvent} = operaSlice.actions

export const operaEventSelector = state => state.opera.operaEvent


export default operaSlice.reducer
