/* eslint-disable import/no-cycle */

import { configureStore } from '@reduxjs/toolkit';
import bagReducer from '../slices/bagSlice';
import rareReducer from '../slices/rareSlice';

const store = configureStore({
  reducer: {
    bag: bagReducer,
    rare: rareReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
