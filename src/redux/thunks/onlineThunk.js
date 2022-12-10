import {createAsyncThunk} from "@reduxjs/toolkit"
import instance from "../../api/axios"

export const getOnlineData = createAsyncThunk(
    'online/get',
    async () => {
        return await instance.get('online')
    }
)

const getOnlineDataPending = (state) => {
    state.loading = true
    console.log(`pending`)
}

const getOnlineDataRejected = (state) => {
    state.loading = false
    state.errorMessage = 'Error occurred during loading data'
}

const getOnlineDataFulfilled = (state, { payload }) => {
    state.allItems = payload.data;
    state.uploadedItems = payload.data.slice(0, 8)
}

export const getOnlineExtraReducer = builder => {
    builder
        .addCase(getOnlineData.pending, getOnlineDataPending)
        .addCase(getOnlineData.rejected, getOnlineDataRejected)
        .addCase(getOnlineData.fulfilled, getOnlineDataFulfilled)
}
