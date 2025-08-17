import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        searchMovie: false
    },
    reducers: {
        toggleSearchMovie: (state) => {
            state.searchMovie = !state.searchMovie
        }
    }
});

export const { toggleSearchMovie } = searchSlice.actions;

export default searchSlice.reducer;