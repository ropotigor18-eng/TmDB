import s from "../MainPage.module.css";
import MovieCard from "../../../../common/Components/MovieCard/MovieCard.tsx";
import {useFetchUpcomingMoviesQuery} from "../../../../Services/FetchMovies/FetchMovies.ts";
import NavButton from "../../../../common/Components/NavButton/NavButton.tsx";
import RequestFeedback from "../../../../common/Components/RequestFeedback/RequestFeedback.tsx";
import MovieGridSkeleton from "../../../../common/Components/Skeletons/MovieGridSkeleton.tsx";

const UpcomingMovies = () => {
    const {data: upcomingData, isLoading, isError} = useFetchUpcomingMoviesQuery(1)
    const upcomingMovies = upcomingData?.results?.slice(0, 6)
    return (
        <div>
            <div className={s.header_films}>
                <h2>Upcoming Movies</h2>
                <NavButton to={'/category/upcoming'}>View more</NavButton>
            </div>
            {isLoading && <MovieGridSkeleton/>}
            {isError && <RequestFeedback message="Failed to load upcoming movies." variant="error"/>}
            {!isLoading && !isError && upcomingMovies?.length === 0 && (
                <RequestFeedback message="Upcoming movies are unavailable right now."/>
            )}
            <div className={s.container}>
                {upcomingMovies?.map((movie) => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </div>
        </div>
    );
};

export default UpcomingMovies;
