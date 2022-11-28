import {createSlice} from "@reduxjs/toolkit";
import { getPageDataExtraReducer } from "../thunks/otherThunk"

const initialState = {
    isFiltersActive: false,
    allItems: [],
    loadingItems: [],
}

const otherPageSlice = createSlice({
    name: 'other',
    initialState,
    reducers: {
        // uploadPageData: (state, { payload }) => {
        //     state.otherPageData = payload
        // }
        loadItems: (state) => {
            // let n = 8
            state.loadingItems = state.allItems.slice(0, state.loadingItems.length + 8)
        },
        filterData: (state, {payload} ) => {
            const buttonsData = Object.values(payload.isActiveButtons)
            const radioButtonsData = Object.values(payload.isActiveRadioButtons)
            state.loadingItems = state.allItems.filter(item => {
                if(
                    buttonsData.includes(item.genre) ||
                    radioButtonsData.includes(item.cinemas) ||
                    item.price <= payload.ticketPrice
                ) {
                    return item
                }
            })       
        },
        setIsFiltersActive: (state, {payload} ) => {
            console.log(payload)
            state.isFiltersActive = payload
        },
        // filterItemsByCategory: (state, {payload} ) => {
        //     const payloadValues = Object.values(payload)
        //     const filteredItems = state.allItems.filter(item => payloadValues.includes(item.genre))
        //     if(filteredItems.length > 0) state.loadingItems = filteredItems
        // },
        // filterItemsByCinemas: (state, { payload }) => {
        //     const payloadValues = Object.values(payload)
        //     const filteredItems = state.allItems.filter(item => payloadValues.includes(item.genre))
        //     if(filteredItems.length > 0) state.loadingItems = filteredItems
        // },
        // filterItemsByPrice: (state, { payload }) => {
        //     // state.otherPageData = payload
        // },
    },
    extraReducers: builder => {
        getPageDataExtraReducer(builder)
    }
})

// export const {loadItems, filterItemsByCategory} = otherPageSlice.actions
export const {loadItems, filterData, setIsFiltersActive} = otherPageSlice.actions

export const otherPageDataSelector = state => state.other.allItems
export const loadingItemsSelector = state => state.other.loadingItems
export const isFiltersActiveSelector = state => state.other.isFiltersActive

export default otherPageSlice.reducer
