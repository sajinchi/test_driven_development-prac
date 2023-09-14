import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.slice";


const allReducers = combineReducers({
    auth: authReducer,
})

export const store = configureStore({
    reducer: allReducers,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch