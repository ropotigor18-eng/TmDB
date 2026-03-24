import {baseApi} from "../../App/model/baseApi.ts"
import type {MoviesResponse} from "./popularMoviesApi.types.ts"

export const moviesApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        fetchTopRatedMovies: build.query<MoviesResponse, number>({
            query: (page = 1) => ({
                url: `/movie/top_rated?page=${page}`,
            }),
        }),

        fetchUpcomingMovies: build.query<MoviesResponse, number>({
            query: (page = 1) => ({
                url: `/movie/upcoming?page=${page}`,
            }),
        }),

        fetchPopularMovies: build.query<MoviesResponse, number>({
            query: (page = 1) => ({
                url: `/movie/popular?page=${page}`,
            }),
        }),

        fetchNowPlayingMovies: build.query<MoviesResponse, number>({
            query: (page = 1) => ({
                url: `/movie/now_playing?page=${page}`,
            }),
        }),
    }),
})

export const {
    useFetchTopRatedMoviesQuery,
    useFetchUpcomingMoviesQuery,
    useFetchPopularMoviesQuery,
    useFetchNowPlayingMoviesQuery,
} = moviesApi