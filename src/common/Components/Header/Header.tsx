import {NavLink} from 'react-router'

import s from './Header.module.css'
import {Path} from "../../routing/Path.ts";
import ThemeToggle from "../ThemeToggle/ThemeToggle.tsx";
import Logo from "../Logog/logo.tsx";

const navItems = [
    {to: Path.Main, label: 'Main'},
    {to: Path.Category, label: 'Category'},
    {to: Path.Filtered, label: 'Filtered'},
    {to: Path.Search, label: 'Search'},
    {to: Path.Favorites, label: 'Favorites'},
]


export const Header = () => {

    return (
        <header className={s.container}>

            <Logo/>
            <nav>
                <ul className={s.list}>
                    {navItems.map(item => (
                        <li key={item.to}>
                            <NavLink
                                to={item.to}
                                className={({isActive}) =>
                                    `${s.link} ${isActive ? s.activeLink : ''}`
                                }
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}

                </ul>
            </nav>
            <ThemeToggle/>
        </header>
    )
}