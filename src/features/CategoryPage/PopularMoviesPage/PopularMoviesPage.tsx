import MovieCard from "../../../common/Components/MovieCard/MovieCard.tsx";

import s from './PopularMoviesPage.module.css'
import {Pagination} from "../../../common/Components/Pagination/Pagination.tsx";
import {useState} from "react";
import {useFetchPopularMoviesQuery} from "../../../Services/FetchMovies/FetchMovies.ts";
import RequestFeedback from "../../../common/Components/RequestFeedback/RequestFeedback.tsx";
import MovieGridSkeleton from "../../../common/Components/Skeletons/MovieGridSkeleton.tsx";

type Props = {
    title?: string
}
const PopularMoviesPage = ({title}: Props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const {data: popularMovies, isLoading, isError} = useFetchPopularMoviesQuery(currentPage)

    return (

        <div>
            {title && <h2>{title}</h2>}
            {isLoading && <MovieGridSkeleton count={10}/>}
            {isError && <RequestFeedback message="Failed to load popular movies." variant="error"/>}
            {!isLoading && !isError && popularMovies?.results?.length === 0 && (
                <RequestFeedback message="Popular movies are unavailable right now."/>
            )}
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
