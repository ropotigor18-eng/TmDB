import s from "./UpcomingMoviesPage.module.css";
import MovieCard from "../../../common/Components/MovieCard/MovieCard.tsx";
import {Pagination} from "../../../common/Components/Pagination/Pagination.tsx";
import {useState} from "react";
import {useFetchUpcomingMoviesQuery} from "../../../Services/FetchMovies/FetchMovies.ts";

const UpcomingMoviesPage = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const {data: upcomingData} = useFetchUpcomingMoviesQuery(currentPage)
    return (
        <div>
            <h2>Upcoming Movies</h2>
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