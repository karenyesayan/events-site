import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    movie: {}

}

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        movie: (state, { payload }) => {
            state.movie = payload
        }

    }
})

export const { movie } = movieSlice.actions;

export const movieSelector = state => state.movie.movie;

export default movieSlice.reducer;