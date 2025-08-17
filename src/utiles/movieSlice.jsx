import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        movieTrailer: null,
        searchMovies: null
    },
    reducers: {
        addNowPlayingMovies: (state,action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state,action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state,action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state,action) => {
            state.upcomingMovies = action.payload;
        },
        addSearchMovies: (state,action) => {
            state.searchMovies = action.payload;
        },
        addMovieTrailer: (state,action) => {
            state.movieTrailer = action.payload;
        }
    }
});

export const { addNowPlayingMovies,addMovieTrailer,addPopularMovies,addTopRatedMovies,addUpcomingMovies,addSearchMovies } = movieSlice.actions;

export default movieSlice.reducer;