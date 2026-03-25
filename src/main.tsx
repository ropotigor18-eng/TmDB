import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App/App.tsx'
import {BrowserRouter} from "react-router";
import {Provider} from "react-redux";
import {store} from "./App/model/store.ts";
import ScrollToTop from "./common/Components/ScrollToTop/ScrollToTop.tsx";
import AppErrorBoundary from "./common/Components/AppErrorBoundary/AppErrorBoundary.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <AppErrorBoundary>
                <ScrollToTop/>

                <Provider store={store}>
                    <App/>
                </Provider>
            </AppErrorBoundary>
        </BrowserRouter>
    </StrictMode>,
)
