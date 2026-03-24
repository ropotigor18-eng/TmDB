import {createSlice, type PayloadAction} from '@reduxjs/toolkit';
import type {Movie} from "../../Services/FetchMovies/popularMoviesApi.types.ts";

type FavoritesState = {
    movies: Movie[];
};

const getInitialState = (): FavoritesState => {
    const stored = localStorage.getItem("favorites");
    return {
        movies: stored ? JSON.parse(stored) : [],
    };
};

const initialState: FavoritesState = getInitialState();

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorite(state, action: PayloadAction<Movie>) {
            const movie = action.payload;

            const exists = state.movies.find(m => m.id === movie.id);

            if (exists) {
                state.movies = state.movies.filter(m => m.id !== movie.id);
            } else {
                state.movies.push(movie);
            }

            localStorage.setItem("favorites", JSON.stringify(state.movies));
        },
    },
});

export const {toggleFavorite} = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;