import {useEffect, useState} from "react";
import s from './Poster.module.css';
import {useFetchPopularMoviesQuery} from "../../../Services/FetchMovies/FetchMovies.ts";

const Poster = () => {
    const {data} = useFetchPopularMoviesQuery(1)
    const [randomMovie, setRandomMovie] = useState<any>(null)

    const movies = data?.results

    useEffect(() => {
        if (movies?.length) {
            const random = movies[Math.floor(Math.random() * movies.length)]
            setRandomMovie(random)
        }
    }, [movies])

    if (!randomMovie) return null
    return (
        <div className={s.posterWrapper}>
            <img
                src={`https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`}
                alt={randomMovie.title}
                className={s.poster}
            />
        </div>
    );
};

export default Poster;