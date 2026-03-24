import {useAppSelector} from "../../common/utils/useAppHooks.ts";
import MovieCard from "../../common/Components/MovieCard/MovieCard.tsx";
import s from './FavoritesPage.module.css'

const FavoritesPage = () => {
    const movies = useAppSelector(state => state.favorites.movies);

    return (
        <div className={s.favorite_page}>
            <div className={s.container}>
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </div>
        </div>
    );
};

export default FavoritesPage;