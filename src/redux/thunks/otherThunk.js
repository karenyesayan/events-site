import {createAsyncThunk} from "@reduxjs/toolkit"
import instance from "../../api/axios"

export const getOtherPageData = createAsyncThunk(
    // 'otherData/get',
    'other/get',
    async () => {
        return await instance.get('other')
    }
)

const updatePageItemsFulfilled = (state, { payload }) => {
    state.allItems = payload.data;
    state.loadingItems = payload.data.slice(0, 8)
}

export const getPageDataExtraReducer = builder => {
    builder
        .addCase(getOtherPageData.fulfilled, updatePageItemsFulfilled)
}
