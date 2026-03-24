import s from "../MainPage.module.css";
import MovieCard from "../../../../common/Components/MovieCard/MovieCard.tsx";
import {useFetchUpcomingMoviesQuery} from "../../../../Services/FetchMovies/FetchMovies.ts";
import NavButton from "../../../../common/Components/NavButton/NavButton.tsx";

const UpcomingMovies = () => {
    const {data: upcomingData} = useFetchUpcomingMoviesQuery(1)
    const upcomingMovies = upcomingData?.results?.slice(0, 6)
    return (
        <div>
            <div className={s.header_films}>
                <h2>Upcoming Movies</h2>
                <NavButton to={'/category/upcoming'}>View more</NavButton>
            </div>
            <div className={s.container}>
                {upcomingMovies?.map((movie) => (
                    <MovieCard movie={movie}/>
                ))}
            </div>
        </div>
    );
};

export default UpcomingMovies;