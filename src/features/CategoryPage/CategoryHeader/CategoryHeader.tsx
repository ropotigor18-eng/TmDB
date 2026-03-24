import {NavLink} from "react-router";
import s from './CategoryHeader.module.css'

const CategoryHeader = () => {
    return (
        <div className={s.category_header}>
            <NavLink end className={({isActive}) =>
                `${s.link} ${isActive ? s.activeLink : ''}`
            } to="/category">Popular
                Movies</NavLink>
            <NavLink className={({isActive}) =>
                `${s.link} ${isActive ? s.activeLink : ''}`
            } to="/category/topPage">Top Rated
                Movies</NavLink>
            <NavLink className={({isActive}) =>
                `${s.link} ${isActive ? s.activeLink : ''}`
            } to="/category/upcoming">Upcoming
                Movies</NavLink>
            <NavLink className={({isActive}) =>
                `${s.link} ${isActive ? s.activeLink : ''}`
            } to="/category/nowplaying">Now
                Playing Movies</NavLink>
        </div>
    );
};

export default CategoryHeader;