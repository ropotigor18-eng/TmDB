import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App/App.tsx'
import {BrowserRouter} from "react-router";
import {Provider} from "react-redux";
import {store} from "./App/model/store.ts";
import ScrollToTop from "./common/Components/ScrollToTop/ScrollToTop.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <ScrollToTop/>

            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </StrictMode>,
)
