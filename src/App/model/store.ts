import {configureStore} from '@reduxjs/toolkit'
import {baseApi} from "./baseApi.ts";
import {themeReducer} from "./ThemeSlice.ts";
import {favoritesReducer} from "./favoritesSlice.ts";


export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        theme: themeReducer,
        favorites: favoritesReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;