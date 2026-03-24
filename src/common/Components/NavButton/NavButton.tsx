import s from "./NavButton.module.css"
import {Link} from "react-router";
import * as React from "react";

type Props = {
    to: string
    children: React.ReactNode
    className?: string
}

const NavButton = ({to, children, className}: Props) => {
    return (
        <Link to={to} className={`${s.button} ${className || ""}`}>
            {children}
        </Link>
    )
}

export default NavButton