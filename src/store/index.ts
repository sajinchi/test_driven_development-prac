import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.slice";
import userSelfReducer from "./user/userSelf.slice";

const persistConfig = {
    key: 'root',
    storage,
  }

const allReducers = combineReducers({
    auth: authReducer,
    userSelf : userSelfReducer,
})

const persistedReducer = persistReducer(persistConfig, allReducers);

export const store = configureStore({
    reducer: persistedReducer,
})
export const persistor = persistStore(store);


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch