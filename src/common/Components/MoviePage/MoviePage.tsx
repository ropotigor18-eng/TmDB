import {useParams} from "react-router"
import {useGetMovieByIdQuery} from "../../../Services/NowPlayingMovies/NowPlayingMovies.ts";
import ActorLists from "./ActorLists/ActorLists.tsx";
import s from './MoviePage.module.css'
import SimilarList from "./ActorLists/SimilarList/SimilarList.tsx";

const MoviePage = () => {
    const {id} = useParams();

    const movieId = Number(id);

    const {data} = useGetMovieByIdQuery(movieId);


    if (!data) return null;
    return (
        <div>
            <div className={s.movie_info}>
                <img className={s.movi_poster}
                     src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}

                     alt={'лого'}/>
                <div>
                    <h1>{data.title}</h1>
                    <p>{data.overview}</p>
                    <div className={s.genres}>
                        {data?.genres.map((genre) => (<p key={genre.id}>{genre.name}</p>))}
                    </div>
                </div>
            </div>
            <div>
                <ActorLists id={id}/>
                <SimilarList id={id}/>
            </div>
        </div>
    )
}

export default MoviePage