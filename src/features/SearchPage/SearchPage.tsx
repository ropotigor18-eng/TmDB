import {useSearchMoviesQuery} from "../../Services/FilterApi/FilterApi.ts";
import {useEffect, useState} from "react";
import SearchInput from "../../common/Components/SearchInput/SearchInput.tsx";
import MovieCard from "../../common/Components/MovieCard/MovieCard.tsx";
import s from './SearchPage.module.css';
import {useSearchParams} from "react-router";
import {Pagination} from "../../common/Components/Pagination/Pagination.tsx";
import RequestFeedback from "../../common/Components/RequestFeedback/RequestFeedback.tsx";
import MovieGridSkeleton from "../../common/Components/Skeletons/MovieGridSkeleton.tsx";


const SearchPage = () => {
    const [params] = useSearchParams();
    const query = params.get("query") || "";

    const [search, setSearch] = useState(query);
    const [page, setPage] = useState(1);

    // синхронизация input с URL
    useEffect(() => {
        setSearch(query);
    }, [query]);

    const {data, isLoading, isError} = useSearchMoviesQuery(
        {query, page},
        {skip: !query}
    );

    return (
        <div>
            {query && <h2>Results for: {query}</h2>}

            <SearchInput
                value={search}
                onChange={(val) => setSearch(val)}
            />

            {!query && <p>Start typing to search...</p>}
            {query && isLoading && <MovieGridSkeleton/>}
            {query && isError && <RequestFeedback message="Search failed. Try again in a moment." variant="error"/>}
            {query && !isLoading && !isError && data?.results.length === 0 && (
                <RequestFeedback message="No movies were found for this query."/>
            )}

            {query && (
                <div className={s.container}>
                    {data?.results.map((movie) => (
                        <MovieCard movie={movie} key={movie.id}/>
                    ))}
                </div>
            )}
            <Pagination currentPage={page} setCurrentPage={setPage} pagesCount={data?.total_pages || 0}/>
        </div>
    );
};

export default SearchPage;
