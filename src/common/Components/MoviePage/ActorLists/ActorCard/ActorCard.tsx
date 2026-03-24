import type {CastMember} from "../../../../../Services/NowPlayingMovies/NowPlayingMoviesApi.types.ts";
import s from './ActorCard.module.css'

type Props = {
    actor: CastMember
}
const ActorCard = ({actor}: Props) => {
    return (
        <div className={s.actor_card}>
            {actor.profile_path && (
                <img className={s.avatar}
                     src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                     alt={actor.name}

                />
            )}
            <p className={s.name}>{actor.name}</p>
            <p className={s.character}>{actor.character}</p>
        </div>
    );
};

export default ActorCard;