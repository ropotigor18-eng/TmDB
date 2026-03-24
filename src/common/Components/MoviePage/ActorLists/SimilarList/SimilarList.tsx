import MovieCard from "../../../MovieCard/MovieCard.tsx";
import {useGetSimilarMoviesQuery} from "../../../../../Services/NowPlayingMovies/NowPlayingMovies.ts";
import s from './SimilarList.module.css'

type Props = {
    id?: string
}
const SimilarList = ({id}: Props) => {
    const movieId = Number(id);
    const {data: similar} = useGetSimilarMoviesQuery(movieId);
    return (
        <div>
            <h2>Similar Movies</h2>

            <div className={s.container}>
                {similar?.results.slice(0, 6).map(movie => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </div>
        </div>
    );
};

export default SimilarList;