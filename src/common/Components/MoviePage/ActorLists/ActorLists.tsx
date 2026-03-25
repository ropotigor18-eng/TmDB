import {skipToken} from "@reduxjs/toolkit/query";
import {useGetMovieCreditsQuery} from "../../../../Services/NowPlayingMovies/NowPlayingMovies.ts";
import s from "./ActorLists.module.css";
import ActorCard from "./ActorCard/ActorCard.tsx";
import RequestFeedback from "../../RequestFeedback/RequestFeedback.tsx";
import ActorsSkeleton from "../../Skeletons/ActorsSkeleton.tsx";

type Props = {
    id?: string
}

const ActorLists = ({id}: Props) => {
    const movieId = Number(id);
    const isInvalidMovieId = !id || Number.isNaN(movieId) || movieId <= 0;
    const {data: credits, isLoading, isError} = useGetMovieCreditsQuery(isInvalidMovieId ? skipToken : movieId);

    if (isInvalidMovieId) {
        return null;
    }

    return (
        <div>
            <h2>Actors</h2>
            {isLoading && <ActorsSkeleton/>}
            {isError && <RequestFeedback message="Failed to load the cast." variant="error"/>}
            {!isLoading && !isError && credits?.cast?.length === 0 && (
                <RequestFeedback message="Cast information is unavailable."/>
            )}
            <div className={s.container}>
                {credits?.cast?.slice(0, 6).map(actor => (
                    <ActorCard key={actor.id} actor={actor}/>
                ))}
            </div>
        </div>
    );
};

export default ActorLists;
