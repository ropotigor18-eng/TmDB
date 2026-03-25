import NavButton from "../NavButton/NavButton.tsx";
import {Path} from "../../routing/Path.ts";
import s from "./PageNotFound.module.css";

const PageNotFound = () => {
    return (
        <section className={s.wrapper}>
            <div className={s.content}>
                <p className={s.code}>404</p>
                <h1 className={s.title}>Page not found</h1>
                <p className={s.text}>The page you requested does not exist or has been moved.</p>
                <div className={s.actions}>
                    <NavButton to={Path.Main}>Return to main page</NavButton>
                </div>
            </div>
        </section>
    );
};

export default PageNotFound;
