import {useEffect} from "react";
import {useNavigate, useParams} from "react-router";
import {skipToken} from "@reduxjs/toolkit/query";
import {toast} from "react-toastify";
import {useGetMovieByIdQuery} from "../../../Services/NowPlayingMovies/NowPlayingMovies.ts";
import ActorLists from "./ActorLists/ActorLists.tsx";
import s from "./MoviePage.module.css";
import SimilarList from "./ActorLists/SimilarList/SimilarList.tsx";
import RequestFeedback from "../RequestFeedback/RequestFeedback.tsx";
import zagl from "../../../assets/images/zagl.png";
import MovieDetailsSkeleton from "../Skeletons/MovieDetailsSkeleton.tsx";

const MoviePage = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const movieId = Number(id);
    const isInvalidMovieId = !id || Number.isNaN(movieId) || movieId <= 0;
    const {data, isLoading, isError} = useGetMovieByIdQuery(isInvalidMovieId ? skipToken : movieId);

    useEffect(() => {
        if (isInvalidMovieId) {
            toast.error("Movie id in the URL is invalid.");
        }
    }, [isInvalidMovieId]);

    if (isInvalidMovieId) {
        return <RequestFeedback message="Invalid movie link." variant="error"/>;
    }

    if (isLoading) {
        return <MovieDetailsSkeleton/>;
    }

    if (isError) {
        return <RequestFeedback message="Failed to load movie details." variant="error"/>;
    }

    if (!data) {
        return <RequestFeedback message="Movie details are unavailable." variant="error"/>;
    }

    return (
        <div>
            <button className={s.backButton} onClick={() => navigate(-1)}>
                Back
            </button>
            <div className={s.movie_info}>
                <img
                    className={s.movi_poster}
                    src={data.backdrop_path ? `https://image.tmdb.org/t/p/original${data.backdrop_path}` : zagl}
                    onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = zagl;
                    }}
                    alt={data.title}
                />
                <div>
                    <h1>{data.title}</h1>
                    <p>{data.overview}</p>
                    <div className={s.genres}>
                        {data.genres.map((genre) => (<p key={genre.id}>{genre.name}</p>))}
                    </div>
                    <p>{data.release_date}</p>
                </div>
            </div>
            <div>
                <ActorLists id={id}/>
                <SimilarList id={id}/>
            </div>
        </div>
    );
};

export default MoviePage;
