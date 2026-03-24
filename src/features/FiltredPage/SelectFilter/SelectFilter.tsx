import type {SortOption} from "../../../Services/FilterApi/FilterApi.ts";
import s from './SortSelect.module.css'

type Props = {
    value: SortOption
    onChange: (value: SortOption) => void
}

const SortSelect = ({value, onChange}: Props) => {
    return (
        <select
            className={s.select}
            value={value}
            onChange={(e) => onChange(e.target.value as SortOption)}
        >
            <option value="popular">Popular</option>
            <option value="top_rated">Top Rated</option>
            <option value="rating_desc">Rating ↓</option>
            <option value="rating_asc">Rating ↑</option>
            <option value="release_desc">Newest</option>
            <option value="release_asc">Oldest</option>
        </select>
    )
}

export default SortSelect