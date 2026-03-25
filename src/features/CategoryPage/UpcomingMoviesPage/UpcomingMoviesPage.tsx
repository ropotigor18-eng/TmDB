import s from "./UpcomingMoviesPage.module.css";
import MovieCard from "../../../common/Components/MovieCard/MovieCard.tsx";
import {Pagination} from "../../../common/Components/Pagination/Pagination.tsx";
import {useState} from "react";
import {useFetchUpcomingMoviesQuery} from "../../../Services/FetchMovies/FetchMovies.ts";
import RequestFeedback from "../../../common/Components/RequestFeedback/RequestFeedback.tsx";
import MovieGridSkeleton from "../../../common/Components/Skeletons/MovieGridSkeleton.tsx";

const UpcomingMoviesPage = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const {data: upcomingData, isLoading, isError} = useFetchUpcomingMoviesQuery(currentPage)
    return (
        <div>
            <h2>Upcoming Movies</h2>
            {isLoading && <MovieGridSkeleton count={10}/>}
            {isError && <RequestFeedback message="Failed to load upcoming movies." variant="error"/>}
            {!isLoading && !isError && upcomingData?.results?.length === 0 && (
                <RequestFeedback message="Upcoming movies are unavailable right now."/>
            )}
            <div className={s.container}>
                {upcomingData?.results?.map((movie) => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </div>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage}
                        pagesCount={upcomingData?.total_pages || 0}/>
        </div>
    );
};

export default UpcomingMoviesPage;
