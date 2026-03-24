import {baseApi} from "../../App/model/baseApi"
import type {MoviesResponse} from "../FetchMovies/popularMoviesApi.types"

export type SortOption =
    | "popular"
    | "top_rated"
    | "rating_desc"
    | "rating_asc"
    | "release_desc"
    | "release_asc"

type MoviesParams = {
    page?: number
    sort?: SortOption
    minRating?: number
    maxRating?: number
    genreIds?: number[]
}

const getParams = (sort?: SortOption) => {
    switch (sort) {
        case "popular":
            return {sort_by: "popularity.desc"}

        case "top_rated":
            return {sort_by: "vote_average.desc"}

        case "rating_asc":
            return {sort_by: "vote_average.asc"}

        case "release_desc":
            return {sort_by: "primary_release_date.desc"}

        case "release_asc":
            return {sort_by: "primary_release_date.asc"}

        default:
            return {}
    }
}

export const moviesApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        fetchMovies: build.query<MoviesResponse, MoviesParams>({
            query: ({page = 1, sort, minRating, maxRating, genreIds}) => ({
                url: "/discover/movie",
                params: {
                    page,
                    ...getParams(sort),

                    ...(minRating !== undefined && {
                        "vote_average.gte": minRating,
                    }),
                    ...(maxRating !== undefined && {
                        "vote_average.lte": maxRating,
                    }),

                    ...(genreIds?.length && {
                        with_genres: genreIds.join(","),
                    }),
                },
            }),
        }),
        searchMovies: build.query<MoviesResponse, { query: string; page?: number }>({
            query: ({query, page = 1}) => ({
                url: "/search/movie",
                params: {
                    query,
                    page,
                },
            }),
        }),
    }),
})

export const {useFetchMoviesQuery, useSearchMoviesQuery} = moviesApi