import MainPage from "../../features/MainPage/ui/MainPage.tsx";
import {Route, Routes} from "react-router";
import CategoryPage from "../../features/CategoryPage/CategoryPage.tsx";
import FilteredPage from "../../features/FiltredPage/FilteredPage.tsx";
import SearchPage from "../../features/SearchPage/SearchPage.tsx";
import PageNotFound from "../Components/PageNotFound/PageNotFound.tsx";
import {Path} from "./Path.ts";
import MoviePage from "../Components/MoviePage/MoviePage.tsx";
import PopularMoviesPage from "../../features/CategoryPage/PopularMoviesPage/PopularMoviesPage.tsx";
import UpcomingMoviesPage from "../../features/CategoryPage/UpcomingMoviesPage/UpcomingMoviesPage.tsx";
import NowPlayingMoviesPage from "../../features/CategoryPage/NowPlayingMoviesPage/NowPlayingMoviesPage.tsx";
import TopRatedMoviesPage from "../../features/CategoryPage/TopRatedMoviesPage/TopRatedMoviesPage.tsx";
import FavoritesPage from "../../features/FavoritesPage/FavoritesPage.tsx";


const Routing = () => {
    return (
        <Routes>
            <Route path={Path.Main} element={<MainPage/>}/>
            <Route path={Path.Category} element={<CategoryPage/>}>
                <Route path={Path.Category} element={<PopularMoviesPage title={'Popular Movies'}/>}/>
                <Route path="topPage" element={<TopRatedMoviesPage/>}/>
                <Route path="upcoming" element={<UpcomingMoviesPage/>}/>
                <Route path="nowplaying" element={<NowPlayingMoviesPage/>}/>
            </Route>
            <Route path={Path.Filtered} element={<FilteredPage/>}/>
            <Route path={Path.Search} element={<SearchPage/>}/>
            <Route path={Path.Favorites} element={<FavoritesPage/>}/>
            <Route path={Path.NotFound} element={<PageNotFound/>}/>
            <Route path="/movie/:id" element={<MoviePage/>}/>
        </Routes>
    );
};

export default Routing;