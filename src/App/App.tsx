import s from './App.module.css'
import {Header} from "../common/Components/Header/Header.tsx";
import Routing from "../common/routing/Routing.tsx";
import {useEffect} from "react";
import {useAppSelector} from "../common/utils/useAppHooks.ts";
import Footer from "../common/Components/Footer/Footer.tsx";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {LinearProgress} from "../common/Components/LinearProgress/LinearProgress.tsx";
import {SkeletonTheme} from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


function App() {
    const theme = useAppSelector(state => state.theme.theme);
    const isGlobalLoading = useAppSelector(state => state.progress.pendingCount > 0);

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <SkeletonTheme
            baseColor={theme === "dark" ? "#1f2937" : "#e5e7eb"}
            highlightColor={theme === "dark" ? "#374151" : "#f8fafc"}
        >
            <>
                {isGlobalLoading && <LinearProgress/>}
                <div className={s.layout}>
                    <Header/>
                    <main className={s.main}>
                        <Routing/>
                    </main>
                    <Footer/>
                </div>
                <ToastContainer
                    position="bottom-right"
                    autoClose={4000}
                    pauseOnFocusLoss={false}
                    theme={theme === "dark" ? "dark" : "light"}
                />
            </>
        </SkeletonTheme>
    )
}

export default App
