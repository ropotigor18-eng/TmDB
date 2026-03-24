import {baseApi} from "../../App/model/baseApi.ts";
import type {MovieCreditsResponse, MovieDetails, SimilarMoviesResponse} from "./NowPlayingMoviesApi.types.ts";


export const NowPlayingMoviesApi = baseApi.injectEndpoints({
    endpoints: (build) => ({

        getMovieById: build.query<MovieDetails, number>({
            query: (id) => ({
                url: `/movie/${id}`,
                method: "GET",
            }),
        }),
        getMovieCredits: build.query<MovieCreditsResponse, number>({
            query: (id) => ({
                url: `/movie/${id}/credits`,
            }),
        }),
        getSimilarMovies: build.query<SimilarMoviesResponse, number>({
            query: (id) => ({
                url: `/movie/${id}/similar`,
            }),
        }),
    })
})
export const {useGetMovieByIdQuery, useGetMovieCreditsQuery, useGetSimilarMoviesQuery} = NowPlayingMoviesApi