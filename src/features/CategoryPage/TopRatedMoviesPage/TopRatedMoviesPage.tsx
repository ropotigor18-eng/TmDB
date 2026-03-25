import s from "./TopRatedMoviesPage.module.css";
import MovieCard from "../../../common/Components/MovieCard/MovieCard.tsx";
import {Pagination} from "../../../common/Components/Pagination/Pagination.tsx";
import {useState} from "react";
import {useFetchTopRatedMoviesQuery} from "../../../Services/FetchMovies/FetchMovies.ts";
import RequestFeedback from "../../../common/Components/RequestFeedback/RequestFeedback.tsx";
import MovieGridSkeleton from "../../../common/Components/Skeletons/MovieGridSkeleton.tsx";

const TopRatedMoviesPage = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const {data: topRatedData, isLoading, isError} = useFetchTopRatedMoviesQuery(currentPage)
    return (
        <div>
            <h2>Top Rated Movies</h2>
            {isLoading && <MovieGridSkeleton count={10}/>}
            {isError && <RequestFeedback message="Failed to load top rated movies." variant="error"/>}
            {!isLoading && !isError && topRatedData?.results?.length === 0 && (
                <RequestFeedback message="Top rated movies are unavailable right now."/>
            )}
            <div className={s.container}>
                {topRatedData?.results?.map((movie) => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </div>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage}
                        pagesCount={topRatedData?.total_pages || 0}/>
        </div>
    );
};

export default TopRatedMoviesPage;
