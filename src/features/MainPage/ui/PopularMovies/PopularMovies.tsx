import s from "../MainPage.module.css";
import MovieCard from "../../../../common/Components/MovieCard/MovieCard.tsx";
import {useFetchPopularMoviesQuery} from "../../../../Services/FetchMovies/FetchMovies.ts";
import NavButton from "../../../../common/Components/NavButton/NavButton.tsx";
import RequestFeedback from "../../../../common/Components/RequestFeedback/RequestFeedback.tsx";
import MovieGridSkeleton from "../../../../common/Components/Skeletons/MovieGridSkeleton.tsx";


const PopularMovies = () => {
    const {data: popularMovies, isLoading, isError} = useFetchPopularMoviesQuery(1)
    const popularMoviesQuery = popularMovies?.results?.slice(0, 6)
    return (
        <>
            <div className={s.popularMovies}>
                <div className={s.header_films}>
                    <h2>Popular Movies</h2>
                    <NavButton to={'/category'}>View more</NavButton>
                </div>
                {isLoading && <MovieGridSkeleton/>}
                {isError && <RequestFeedback message="Failed to load popular movies." variant="error"/>}
                {!isLoading && !isError && popularMoviesQuery?.length === 0 && (
                    <RequestFeedback message="Popular movies are unavailable right now."/>
                )}
                <div className={s.container}>
                    {popularMoviesQuery?.map((movie) => (
                        <MovieCard key={movie.id} movie={movie}/>
                    ))}
                </div>

            </div>
        </>
    );
};

export default PopularMovies;
