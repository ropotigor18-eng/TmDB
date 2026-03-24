import s from "./NowPlayingMoviesPage.module.css";
import MovieCard from "../../../common/Components/MovieCard/MovieCard.tsx";
import {Pagination} from "../../../common/Components/Pagination/Pagination.tsx";
import {useState} from "react";
import {useFetchNowPlayingMoviesQuery} from "../../../Services/FetchMovies/FetchMovies.ts";

const NowPlayingMoviesPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const {data: nowPlayingData} = useFetchNowPlayingMoviesQuery(currentPage)

    return (
        <div>
            <h2>Now Playing Movies</h2>
            <div className={s.container}>
                {nowPlayingData?.results?.map((movie) => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </div>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage}
                        pagesCount={nowPlayingData?.total_pages || 0}
            />
        </div>
    );
};

export default NowPlayingMoviesPage;