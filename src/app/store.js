import { configureStore } from '@reduxjs/toolkit';
import dbApi from './api'
import citySlice from './citySlice'

const store = configureStore({
  reducer: {
    [dbApi.reducerPath]: dbApi.reducer,
    [citySlice.name]: citySlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(dbApi.middleware)
});

export default store


