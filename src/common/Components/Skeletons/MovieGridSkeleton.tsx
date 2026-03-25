import Skeleton from "react-loading-skeleton";
import s from "./Skeletons.module.css";

type Props = {
    count?: number;
};

const MovieGridSkeleton = ({count = 6}: Props) => {
    return (
        <div className={s.moviesGrid}>
            {Array.from({length: count}).map((_, index) => (
                <div className={s.movieCard} key={index}>
                    <Skeleton className={s.moviePoster}/>
                    <Skeleton className={s.movieTitle} height={24}/>
                    <Skeleton className={s.movieRating} width={56} height={56} circle/>
                </div>
            ))}
        </div>
    );
};

export default MovieGridSkeleton;
