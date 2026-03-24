import s from "./GenreButtons.module.css"

type Genre = {
    id: number
    name: string
}

type Props = {
    genres: Genre[]
    value: number[]
    onChange: (ids: number[]) => void
}

const GenreButtons = ({genres, value, onChange}: Props) => {
    const toggle = (id: number) => {
        if (value.includes(id)) {
            onChange(value.filter((g) => g !== id))
        } else {
            onChange([...value, id])
        }
    }

    return (
        <div className={s.wrapper}>
            {genres.map((genre) => (
                <button
                    key={genre.id}
                    onClick={() => toggle(genre.id)}
                    className={`${s.button} ${
                        value.includes(genre.id) ? s.active : ""
                    }`}
                >
                    {genre.name}
                </button>
            ))}
        </div>
    )
}

export default GenreButtons