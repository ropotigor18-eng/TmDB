import s from "./FilteredPage.module.css";
import {useState} from "react";
import {type SortOption, useFetchMoviesQuery} from "../../Services/FilterApi/FilterApi.ts";
import MovieCard from "../../common/Components/MovieCard/MovieCard.tsx";
import SortSelect from "./SelectFilter/SelectFilter.tsx";
import {Pagination} from "../../common/Components/Pagination/Pagination.tsx";
import RatingRange from "./RatingRange/RatingRange.tsx";
import {useDebounceValue} from "../../common/hooks/useDebounceValue.ts";
import GenreButtons from "./GenreButtons/GenreButtons.tsx";
import {genresMap} from "./GenreButtons/Genre.ts";

const FilteredPage = () => {
    const [sort, setSort] = useState<SortOption>("popular")
    const [page, setPage] = useState(1)

    const [rating, setRating] = useState<[number, number]>([0, 10])
    const debouncedRating = useDebounceValue(rating, 500)
    const [selectedGenres, setSelectedGenres] = useState<number[]>([])
    const {data, isLoading} = useFetchMoviesQuery({
        page,
        sort,
        minRating: debouncedRating[0],
        maxRating: debouncedRating[1],
        genreIds: selectedGenres,
    })
    const handleReset = () => {
        setSort("popular")
        setPage(1)
        setRating([0, 10])
        setSelectedGenres([])
    }
    if (isLoading) return <h1>Loading...</h1>


    return (
        <div className={s.filter}>
            <aside className={s.filter_interrface}>
                <SortSelect
                    value={sort}
                    onChange={(value) => {
                        setSort(value)
                        setPage(1)
                    }}
                />
                <RatingRange
                    min={0}
                    max={10}
                    value={rating}
                    onChange={(val) => {
                        if (val[0] <= val[1]) {
                            setRating(val)
                        }

                        setPage(1) // 🔥 важно
                    }}
                />
                <GenreButtons
                    genres={genresMap}
                    value={selectedGenres}
                    onChange={(ids) => {
                        setSelectedGenres(ids)
                        setPage(1)
                    }}
                />
                <button className={s.reset_btn} onClick={handleReset}>
                    Reset filters
                </button>
            </aside>
            <div className={s.container}>
                <div className={s.movie_list}>
                    {data?.results.map((movie) => (
                        <MovieCard key={movie.id} movie={movie}/>
                    ))}
                </div>
                <Pagination
                    currentPage={page}
                    setCurrentPage={setPage}
                    pagesCount={data?.total_pages || 0}
                />
            </div>
        </div>
    );
};

export default FilteredPage;