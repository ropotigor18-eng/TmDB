import {configureStore} from '@reduxjs/toolkit'
import {baseApi} from "./baseApi.ts";
import {themeReducer} from "./ThemeSlice.ts";
import {favoritesReducer} from "./favoritesSlice.ts";
import {errorMiddleware} from "./errorMiddleware.ts";
import {progressReducer} from "./progressSlice.ts";


export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        theme: themeReducer,
        favorites: favoritesReducer,
        progress: progressReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware, errorMiddleware),
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
