import s from './Poster.module.css';
import {useFetchPopularMoviesQuery} from "../../../Services/FetchMovies/FetchMovies.ts";
import zagl from "../../../assets/images/zagl.png";

const posterSeed = crypto.getRandomValues(new Uint32Array(1))[0];

const Poster = () => {
    const {data} = useFetchPopularMoviesQuery(1)
    const movies = data?.results ?? [];
    const moviesWithBackdrop = movies.filter((movie) => movie.backdrop_path);
    const featuredMovie = moviesWithBackdrop.length
        ? moviesWithBackdrop[posterSeed % moviesWithBackdrop.length]
        : movies[0] ?? null;

    if (!featuredMovie) return null
    return (
        <div className={s.posterWrapper}>
            <img
                src={featuredMovie.backdrop_path ? `https://image.tmdb.org/t/p/original${featuredMovie.backdrop_path}` : zagl}
                alt={featuredMovie.title}
                className={s.poster}
                onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = zagl;
                }}
            />
        </div>
    );
};

export default Poster;
