/* eslint-disable import/no-cycle */

import { configureStore } from '@reduxjs/toolkit';
import bagReducer from '../slices/bagSlice';

const store = configureStore({
  reducer: {
    bag: bagReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
