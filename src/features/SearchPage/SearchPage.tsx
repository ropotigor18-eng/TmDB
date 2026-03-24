import {useSearchMoviesQuery} from "../../Services/FilterApi/FilterApi.ts";
import {useEffect, useState} from "react";
import SearchInput from "../../common/Components/SearchInput/SearchInput.tsx";
import MovieCard from "../../common/Components/MovieCard/MovieCard.tsx";
import s from './SearchPage.module.css';
import {useSearchParams} from "react-router";
import {Pagination} from "../../common/Components/Pagination/Pagination.tsx";


const SearchPage = () => {
    const [params] = useSearchParams();
    const query = params.get("query") || "";

    const [search, setSearch] = useState(query);
    const [page, setPage] = useState(1);

    // синхронизация input с URL
    useEffect(() => {
        setSearch(query);
    }, [query]);

    const {data, isLoading} = useSearchMoviesQuery(
        {query, page},
        {skip: !query}
    );

    if (isLoading) return <h1>loading</h1>;

    return (
        <div>
            {query && <h2>Results for: {query}</h2>}

            <SearchInput
                value={search}
                onChange={(val) => setSearch(val)}
            />

            {!query && <p>Start typing to search...</p>}

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