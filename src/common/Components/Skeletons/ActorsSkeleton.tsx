import Skeleton from "react-loading-skeleton";
import s from "./Skeletons.module.css";

type Props = {
    count?: number;
};

const ActorsSkeleton = ({count = 6}: Props) => {
    return (
        <div className={s.actorsRow}>
            {Array.from({length: count}).map((_, index) => (
                <div className={s.actorCard} key={index}>
                    <Skeleton className={s.actorAvatar}/>
                    <Skeleton className={s.actorText} height={20}/>
                    <Skeleton width="70%" height={18}/>
                </div>
            ))}
        </div>
    );
};

export default ActorsSkeleton;
