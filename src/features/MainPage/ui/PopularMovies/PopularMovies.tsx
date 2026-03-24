import s from "../MainPage.module.css";
import MovieCard from "../../../../common/Components/MovieCard/MovieCard.tsx";
import {useFetchPopularMoviesQuery} from "../../../../Services/FetchMovies/FetchMovies.ts";
import NavButton from "../../../../common/Components/NavButton/NavButton.tsx";


const PopularMovies = () => {
    const {data: popularMovies, isLoading, isError} = useFetchPopularMoviesQuery(1)
    const popularMoviesQuery = popularMovies?.results?.slice(0, 6)
    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error...</div>
    return (
        <>
            <div className={s.popularMovies}>
                <div className={s.header_films}>
                    <h2>Popular Movies</h2>
                    <NavButton to={'/category'}>View more</NavButton>
                </div>
                <div className={s.container}>
                    {popularMoviesQuery?.map((movie) => (
                        <MovieCard movie={movie}/>
                    ))}
                </div>

            </div>
        </>
    );
};

export default PopularMovies;