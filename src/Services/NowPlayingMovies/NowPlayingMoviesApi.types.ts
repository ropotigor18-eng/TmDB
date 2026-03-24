import type {Movie} from "../FetchMovies/popularMoviesApi.types.ts";

export type MovieDetails = {
    id: number
    title: string
    overview: string
    poster_path: string
    backdrop_path: string
    release_date: string
    vote_average: number
    vote_count: number
    runtime: number
    genres: {
        id: number
        name: string
    }[]
}
export type CastMember = {
    id: number;
    name: string;
    character: string;
    profile_path: string | null;
};

export type CrewMember = {
    id: number;
    name: string;
    job: string;
    department: string;
    profile_path: string | null;
};

export type MovieCreditsResponse = {
    id: number;
    cast: CastMember[];
    crew: CrewMember[];
};
export type SimilarMoviesResponse = {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
};