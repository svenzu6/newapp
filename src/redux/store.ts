import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { spotifyApi } from '../api/spotifyApi'

import authorizationReducer from './oauthConfig'

export const store = configureStore({
    middleware: (getDefaultMiddleware) => {
        return [...getDefaultMiddleware(), spotifyApi.middleware]
    },
    reducer: {
        [spotifyApi.reducerPath]: spotifyApi.reducer,
        authorization: authorizationReducer,

    },
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
