import s from "../MainPage.module.css";
import MovieCard from "../../../../common/Components/MovieCard/MovieCard.tsx";
import {useFetchTopRatedMoviesQuery} from "../../../../Services/FetchMovies/FetchMovies.ts";
import NavButton from "../../../../common/Components/NavButton/NavButton.tsx";

const TopReitMovies = () => {
    const {data: topRatedData} = useFetchTopRatedMoviesQuery(1)
    const topRatedMovies = topRatedData?.results?.slice(0, 6)
    return (
        <div>
            <div className={s.header_films}>
                <h2>Top Rated Movies</h2>
                <NavButton to={'/category/topPage'}>View more</NavButton>
            </div>
            <div className={s.container}>
                {topRatedMovies?.map((movie) => (
                    <MovieCard movie={movie}/>
                ))}
            </div>
        </div>
    );
};

export default TopReitMovies;