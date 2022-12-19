import {createSlice} from "@reduxjs/toolkit";
import { getOnlineExtraReducer } from "../thunks/onlineThunk"

const initialState = {
    isFiltersActive: false,
    allItems: [],
    uploadedItems: [],
    findItemsResult: null,
    loading: false,
    errorMessage: false,
    randomlySelected: [],
}

const onlineSlice = createSlice({
    name: 'online',
    initialState,
    reducers: {
        loadOnlineItems: (state) => {
            state.uploadedItems = state.allItems.slice(0, state.uploadedItems.length + 8)
        },
        filterOnlineData: (state, {payload} ) => {
            const buttonsData = Object.values(payload.isActiveButtons)
            const radioButtonsData = Object.values(payload.isActiveRadioButtons)
            state.uploadedItems = state.allItems.filter(item => {
                    return (buttonsData.includes(item.genre) ||
                    radioButtonsData.includes(item.production) ||
                    item.price <= payload.price)
            })       
        },
        setIsFiltersActive: (state, {payload} ) => {
            state.isFiltersActive = payload
        },
        findOnlineItems: (state, {payload}) => {
            state.findItemsResult = state.allItems.reduce((accumulator, {
                    id,
                    title,
                    genre,
                    runtime,
                    date,
                    cinemas,
                    price,
                    about,
                    trailer,
                    production
                }) => {

                    let inputValue = payload.toLowerCase()
                    let itemTitle = title.toLowerCase().replace(/\s/g, "")
                    let checkedValues = itemTitle.search(inputValue)
      
                    if(checkedValues !== -1) {                        
                        accumulator.push(
                            {
                                id,
                                title,
                                genre,
                                runtime,
                                date,
                                cinemas,
                                price,
                                about,
                                trailer,
                                production,
                                link: `/online/${id}`,
                            }
                        )
                        return accumulator
                    } 
                        return accumulator
                },[])
        },
        resetFindItemsResult: state => {
            state.findItemsResult = null
        },
        randomSelect: (state, {payload}) => {
            state.randomlySelected = state.allItems.filter(element => element.title !== payload).sort(() => .5 - Math.random()).slice(0, 12)
        }
    },
    extraReducers: builder => {
        getOnlineExtraReducer(builder)
    }
})


export const {loadOnlineItems, filterOnlineData, setIsFiltersActive, findOnlineItems, resetFindItemsResult, randomSelect} = onlineSlice.actions

export const allOnlineItemsSelector = state => state.online.allItems
export const uploadedItemsSelector = state => state.online.uploadedItems
export const isFiltersActiveSelector = state => state.online.isFiltersActive
export const findItemsResultSelector = state => state.online.findItemsResult
export const errorMessageSelector = state => state.online.errorMessage
export const randomlySelectedSelector = state => state.online.randomlySelected

export default onlineSlice.reducer
