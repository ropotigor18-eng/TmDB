import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const baseApi = createApi({
    reducerPath: 'baseApi',
    tagTypes: ['Popular'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3',
        prepareHeaders: (headers) => {
            headers.set(
                'Authorization',
                `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`
            )
            return headers
        },
    }),
    endpoints: () => ({}),
})
