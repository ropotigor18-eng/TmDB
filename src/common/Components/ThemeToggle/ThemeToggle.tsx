import {useDispatch} from 'react-redux';
import {toggleTheme} from "../../../App/model/ThemeSlice.ts";
import {FiMoon, FiSun} from "react-icons/fi";
import {useAppSelector} from "../../utils/useAppHooks.ts";
import s from './ThemeToggle.module.css';

const ThemeToggle = () => {
    const dispatch = useDispatch();
    const theme = useAppSelector(state => state.theme.theme);

    return (
        <button
            className={s.button}
            onClick={() => dispatch(toggleTheme())}
        >
            {theme === 'light' ? <FiMoon size={20}/> : <FiSun size={20}/>}
        </button>
    );
};

export default ThemeToggle;