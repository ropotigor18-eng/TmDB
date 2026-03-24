import s from "./TopRatedMoviesPage.module.css";
import MovieCard from "../../../common/Components/MovieCard/MovieCard.tsx";
import {Pagination} from "../../../common/Components/Pagination/Pagination.tsx";
import {useState} from "react";
import {useFetchTopRatedMoviesQuery} from "../../../Services/FetchMovies/FetchMovies.ts";

const TopRatedMoviesPage = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const {data: topRatedData} = useFetchTopRatedMoviesQuery(currentPage)
    return (
        <div>
            <h2>Top Rated Movies</h2>
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