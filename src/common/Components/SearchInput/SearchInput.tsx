import s from "./SearchInput.module.css";
import {useNavigate} from "react-router";


type SearchInputProps = {
    value: string;
    onChange: (value: string) => void;
};

const SearchInput = ({value, onChange}: SearchInputProps) => {
    const navigate = useNavigate();

    const handleSearch = () => {
        const trimmed = value.trim();

        // если пусто → очищаем URL
        if (!trimmed) {
            navigate("/search");
            return;
        }

        navigate(`/search?query=${encodeURIComponent(trimmed)}`);
    };
    const handleChange = (val: string) => {
        onChange(val);

        if (val.trim() === "") {
            navigate("/search"); // очищаем query в URL
        }
    };
    const isDisabled = !value.trim();
    return (
        <div className={s.search}>
            <input
                className={s.input}
                type="search"
                placeholder="Search movies..."
                value={value}
                onChange={(e) => handleChange(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleSearch();
                    }
                }}
            />

            <button disabled={isDisabled} className={s.button} onClick={handleSearch}>
                Search
            </button>
        </div>
    );
};

export default SearchInput;