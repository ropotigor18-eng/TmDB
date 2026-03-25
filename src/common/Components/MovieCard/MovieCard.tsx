import type {Movie} from "../../../Services/FetchMovies/popularMoviesApi.types.ts";
import {useNavigate} from "react-router";
import s from './MovieCard.module.css'
import zagl from '../.././../assets/images/zagl.png'
import {FaHeart, FaRegHeart} from "react-icons/fa";
import {useAppDispatch, useAppSelector} from "../../utils/useAppHooks.ts";
import {toggleFavorite} from "../../../App/model/favoritesSlice.ts";
import type {MouseEventHandler} from "react";


type Props = {
    movie: Movie
}
const MovieCard = ({movie}: Props) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const favorites = useAppSelector(state => state.favorites.movies)
    const getRatingClass = (rating: number) => {
        if (rating >= 7) return s.high
        if (rating >= 5) return s.medium
        return s.low
    }
    const isFav = favorites.some(m => m.id === movie.id);
    const handleToggle: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();
        dispatch(toggleFavorite(movie));
    };
    return (
        <div className={s.movie_card} onClick={() => navigate(`/movie/${movie.id}`)}>

            <img
                className={s.movie_img}
                src={movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : zagl}
                onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = zagl;
                }}
                alt={movie.title}
            />
            <button
                className={`${s.favoriteBtn} ${isFav ? s.visible : ''}`}
                onClick={handleToggle}
            >
                {isFav ? <FaHeart size={32} className={s.heartActive}/> : <FaRegHeart size={32}/>}
            </button>

            <h3 className={s.title}>{movie.title}</h3>

            <p className={`${s.reit} ${getRatingClass(movie.vote_average || 0)}`}>
                {movie.vote_average ? movie.vote_average.toFixed(1) : '0.0'}
            </p>
        </div>

    );
};

export default MovieCard;
