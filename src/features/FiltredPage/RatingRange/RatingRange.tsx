import s from "./RatingRange.module.css"

type Props = {
    value: [number, number]
    min: number
    max: number
    step?: number
    onChange: (value: [number, number]) => void
}

const RatingRange = ({
                         value,
                         min,
                         max,
                         step = 0.1,
                         onChange,
                     }: Props) => {
   

    return (
        <div className={s.rangeWrapper}>
            <div className={s.rangeTrack}/>

            <div
                className={s.rangeFilled}
                style={{
                    left: `${(value[0] / max) * 100}%`,
                    right: `${100 - (value[1] / max) * 100}%`,
                }}
            />

            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value[0]}
                onChange={(e) => {
                    const newMin = Number(Number(e.target.value).toFixed(1))
                    if (newMin <= value[1]) onChange([newMin, value[1]])
                }}
                className={s.thumb}
            />

            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value[1]}
                onChange={(e) => {
                    const newMax = Number(Number(e.target.value).toFixed(1))
                    if (newMax >= value[0]) onChange([value[0], newMax])
                }}
                className={s.thumb}
            />

            <div className={s.values}>
                {value[0].toFixed(1)} - {value[1].toFixed(1)}
            </div>


        </div>
    )
}

export default RatingRange