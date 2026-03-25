import s from "../MainPage.module.css";
import MovieCard from "../../../../common/Components/MovieCard/MovieCard.tsx";
import {useFetchNowPlayingMoviesQuery} from "../../../../Services/FetchMovies/FetchMovies.ts";
import NavButton from "../../../../common/Components/NavButton/NavButton.tsx";
import RequestFeedback from "../../../../common/Components/RequestFeedback/RequestFeedback.tsx";
import MovieGridSkeleton from "../../../../common/Components/Skeletons/MovieGridSkeleton.tsx";


const NowPlayingMovies = () => {
    const {data: nowPlayingData, isLoading, isError} = useFetchNowPlayingMoviesQuery(1)
    const nowPlayingMovies = nowPlayingData?.results?.slice(0, 6)
    return (
        <>
            <div className={s.popularMovies}>
                <div className={s.header_films}>
                    <h2>Now Playing Movies</h2>
                    <NavButton to={'/category/nowplaying'}>View more</NavButton>
                </div>
                {isLoading && <MovieGridSkeleton/>}
                {isError && <RequestFeedback message="Failed to load now playing movies." variant="error"/>}
                {!isLoading && !isError && nowPlayingMovies?.length === 0 && (
                    <RequestFeedback message="Now playing movies are unavailable right now."/>
                )}
                <div className={s.container}>
                    {nowPlayingMovies?.map((movie) => (
                        <MovieCard key={movie.id} movie={movie}/>
                    ))}
                </div>
            </div>
        </>
    );
};

export default NowPlayingMovies;
