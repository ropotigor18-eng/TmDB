import s from "./NowPlayingMoviesPage.module.css";
import MovieCard from "../../../common/Components/MovieCard/MovieCard.tsx";
import {Pagination} from "../../../common/Components/Pagination/Pagination.tsx";
import {useState} from "react";
import {useFetchNowPlayingMoviesQuery} from "../../../Services/FetchMovies/FetchMovies.ts";
import RequestFeedback from "../../../common/Components/RequestFeedback/RequestFeedback.tsx";
import MovieGridSkeleton from "../../../common/Components/Skeletons/MovieGridSkeleton.tsx";

const NowPlayingMoviesPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const {data: nowPlayingData, isLoading, isError} = useFetchNowPlayingMoviesQuery(currentPage)

    return (
        <div>
            <h2>Now Playing Movies</h2>
            {isLoading && <MovieGridSkeleton count={10}/>}
            {isError && <RequestFeedback message="Failed to load now playing movies." variant="error"/>}
            {!isLoading && !isError && nowPlayingData?.results?.length === 0 && (
                <RequestFeedback message="Now playing movies are unavailable right now."/>
            )}
            <div className={s.container}>
                {nowPlayingData?.results?.map((movie) => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </div>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage}
                        pagesCount={nowPlayingData?.total_pages || 0}
            />
        </div>
    );
};

export default NowPlayingMoviesPage;
