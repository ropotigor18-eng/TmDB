import {useGetMovieCreditsQuery} from "../../../../Services/NowPlayingMovies/NowPlayingMovies.ts";
import s from './ActorLists.module.css'
import ActorCard from "./ActorCard/ActorCard.tsx";

type Props = {
    id?: string
}
const ActorLists = ({id}: Props) => {
    const movieId = Number(id);
    const {data: credits} = useGetMovieCreditsQuery(movieId);
    return (
        <div>
            <h2>Actors</h2>
            <div className={s.container}>
                {credits?.cast?.slice(0, 6).map(actor => (
                    <ActorCard key={actor.id} actor={actor}/>
                ))}
            </div>
        </div>
    );
};

export default ActorLists;