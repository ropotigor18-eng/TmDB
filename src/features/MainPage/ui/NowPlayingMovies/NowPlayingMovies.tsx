import s from "../MainPage.module.css";
import MovieCard from "../../../../common/Components/MovieCard/MovieCard.tsx";
import {useFetchNowPlayingMoviesQuery} from "../../../../Services/FetchMovies/FetchMovies.ts";
import NavButton from "../../../../common/Components/NavButton/NavButton.tsx";


const NowPlayingMovies = () => {
    const {data: nowPlayingData} = useFetchNowPlayingMoviesQuery(1)
    const nowPlayingMovies = nowPlayingData?.results?.slice(0, 6)
    return (
        <>
            <div className={s.popularMovies}>
                <div className={s.header_films}>
                    <h2>Now Playing Movies</h2>
                    <NavButton to={'/category/nowplaying'}>View more</NavButton>
                </div>
                <div className={s.container}>
                    {nowPlayingMovies?.map((movie) => (
                        <MovieCard movie={movie}/>
                    ))}
                </div>
            </div>
        </>
    );
};

export default NowPlayingMovies;