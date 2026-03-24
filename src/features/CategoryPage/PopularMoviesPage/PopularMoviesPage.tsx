import MovieCard from "../../../common/Components/MovieCard/MovieCard.tsx";

import s from './PopularMoviesPage.module.css'
import {Pagination} from "../../../common/Components/Pagination/Pagination.tsx";
import {useState} from "react";
import {useFetchPopularMoviesQuery} from "../../../Services/FetchMovies/FetchMovies.ts";

type Props = {
    title?: string
}
const PopularMoviesPage = ({title}: Props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const {data: popularMovies, isLoading} = useFetchPopularMoviesQuery(currentPage)
    if (isLoading) {
        <h1>loading</h1>
    }
    return (

        <div>
            {title && <h2>{title}</h2>}
            <div className={s.container}>
                {popularMovies?.results?.map((movie) => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </div>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage}
                        pagesCount={popularMovies?.total_pages || 0}/>
        </div>

    );
};

export default PopularMoviesPage;