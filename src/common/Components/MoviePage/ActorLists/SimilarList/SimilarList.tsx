import {skipToken} from "@reduxjs/toolkit/query";
import MovieCard from "../../../MovieCard/MovieCard.tsx";
import {useGetSimilarMoviesQuery} from "../../../../../Services/NowPlayingMovies/NowPlayingMovies.ts";
import s from "./SimilarList.module.css";
import RequestFeedback from "../../../RequestFeedback/RequestFeedback.tsx";
import MovieGridSkeleton from "../../../Skeletons/MovieGridSkeleton.tsx";

type Props = {
    id?: string
}

const SimilarList = ({id}: Props) => {
    const movieId = Number(id);
    const isInvalidMovieId = !id || Number.isNaN(movieId) || movieId <= 0;
    const {data: similar, isLoading, isError} = useGetSimilarMoviesQuery(isInvalidMovieId ? skipToken : movieId);

    if (isInvalidMovieId) {
        return null;
    }

    return (
        <div>
            <h2>Similar Movies</h2>
            {isLoading && <MovieGridSkeleton/>}
            {isError && <RequestFeedback message="Failed to load similar movies." variant="error"/>}
            {!isLoading && !isError && similar?.results.length === 0 && (
                <RequestFeedback message="No similar movies were found."/>
            )}
            <div className={s.container}>
                {similar?.results.slice(0, 6).map(movie => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </div>
        </div>
    );
};

export default SimilarList;
