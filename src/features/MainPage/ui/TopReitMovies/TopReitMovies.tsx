import s from "../MainPage.module.css";
import MovieCard from "../../../../common/Components/MovieCard/MovieCard.tsx";
import {useFetchTopRatedMoviesQuery} from "../../../../Services/FetchMovies/FetchMovies.ts";
import NavButton from "../../../../common/Components/NavButton/NavButton.tsx";
import RequestFeedback from "../../../../common/Components/RequestFeedback/RequestFeedback.tsx";
import MovieGridSkeleton from "../../../../common/Components/Skeletons/MovieGridSkeleton.tsx";

const TopReitMovies = () => {
    const {data: topRatedData, isLoading, isError} = useFetchTopRatedMoviesQuery(1)
    const topRatedMovies = topRatedData?.results?.slice(0, 6)
    return (
        <div>
            <div className={s.header_films}>
                <h2>Top Rated Movies</h2>
                <NavButton to={'/category/topPage'}>View more</NavButton>
            </div>
            {isLoading && <MovieGridSkeleton/>}
            {isError && <RequestFeedback message="Failed to load top rated movies." variant="error"/>}
            {!isLoading && !isError && topRatedMovies?.length === 0 && (
                <RequestFeedback message="Top rated movies are unavailable right now."/>
            )}
            <div className={s.container}>
                {topRatedMovies?.map((movie) => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </div>
        </div>
    );
};

export default TopReitMovies;
