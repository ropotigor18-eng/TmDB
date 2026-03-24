import s from './App.module.css'
import {Header} from "../common/Components/Header/Header.tsx";
import Routing from "../common/routing/Routing.tsx";
import {useEffect} from "react";
import {useAppSelector} from "../common/utils/useAppHooks.ts";
import Footer from "../common/Components/Footer/Footer.tsx";


function App() {
    const theme = useAppSelector(state => state.theme.theme);

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <>
            <div className={s.layout}>
                <Header/>
                <main className={s.main}>
                    <Routing/>
                </main>
                <Footer/>
            </div>
        </>
    )
}

export default App
