import Skeleton from "react-loading-skeleton";
import s from "./Skeletons.module.css";

const MovieDetailsSkeleton = () => {
    return (
        <div className={s.detailLayout}>
            <Skeleton className={s.detailPoster}/>
            <div className={s.detailContent}>
                <Skeleton className={s.detailTitle} height={42} width="55%"/>
                <Skeleton className={s.detailText} count={4}/>
                <div className={s.genreRow}>
                    <Skeleton className={s.genreItem}/>
                    <Skeleton className={s.genreItem}/>
                    <Skeleton className={s.genreItem}/>
                </div>
            </div>
        </div>
    );
};

export default MovieDetailsSkeleton;
