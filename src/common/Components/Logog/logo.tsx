import tmdbLogo from '../../../assets/images/logo.svg'
import {Link} from "react-router";
import {Path} from "../../routing/Path.ts";

const Logo = () => {
    return (
        <Link to={Path.Main} aria-label="Go to main page">
            <img width={150} src={tmdbLogo} alt="TMDB logo"/>
        </Link>
    );
};

export default Logo;
