import PopularMovies from "./PopularMovies/PopularMovies.tsx";
import TopReitMovies from "./TopReitMovies/TopReitMovies.tsx";
import UpcomingMovies from "./UpcomingMovies/UpcomingMovies.tsx";
import NowPlayingMovies from "./NowPlayingMovies/NowPlayingMovies.tsx";
import Poster from "../../../common/Components/Poster/Poster.tsx";
import SearchInput from "../../../common/Components/SearchInput/SearchInput.tsx";
import {useState} from "react";
import {useSearchParams} from "react-router";

const MainPage = () => {
    const [params] = useSearchParams();
    const query = params.get("query") || "";
    const [search, setSearch] = useState(query);
    return (
        <>
            <Poster/>
            <SearchInput value={search} onChange={(val) => setSearch(val)}/>
            <PopularMovies/>
            <TopReitMovies/>
            <UpcomingMovies/>
            <NowPlayingMovies/>
        </>
    );
};

export default MainPage;