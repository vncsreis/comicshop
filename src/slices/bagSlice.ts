/* eslint-disable import/no-cycle */

import { createSlice } from '@reduxjs/toolkit';
import Comic from '../models/Comic';
import { RootState } from '../store/store';

interface Bag {
  comics: Comic[];
}

const initialState: Bag = {
  comics: [],
};

export const bagSlice = createSlice({
  name: 'bag',
  initialState,
  reducers: {
    add: (state, action) => {
      if (
        action.payload instanceof Comic &&
        !state.comics.some((comic) => comic.id === action.payload.id)
      ) {
        state.comics.push(action.payload);
      }
    },
    remove: (state, action) => {
      if (action.payload instanceof Comic) {
        state.comics.filter((comic) => comic.id !== action.payload.id);
      }
    },
  },
});

export const { add, remove } = bagSlice.actions;

export const selectBag = (state: RootState) => state.bag.comics;

export const selectBagAmount = (state: RootState) => state.bag.comics.length;

export default bagSlice.reducer;
