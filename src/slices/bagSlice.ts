/* eslint-disable import/no-cycle */

import { createSlice } from '@reduxjs/toolkit';
import Comic, { isComic } from '../models/Comic';
import { RootState } from '../store/store';

function isBagItem(item: any): item is BagItem {
  return (
    item &&
    item.comic &&
    isComic(item.comic) &&
    item.amount &&
    typeof item.amount === 'number'
  );
}

export interface BagItem {
  comic: Comic;
  amount: number;
}

interface Bag {
  items: BagItem[];
}

const initialState: Bag = {
  items: [],
};

export const bagSlice = createSlice({
  name: 'bag',
  initialState,
  reducers: {
    add: (state, action) => {
      if (
        isBagItem(action.payload) &&
        !state.items.some((item) => item.comic.id === action.payload.comic.id)
      ) {
        state.items.push(action.payload);
      }
    },
    update: (state, action) => {
      if (
        isBagItem(action.payload) &&
        state.items.some((item) => item.comic.id === action.payload.comic.id)
      ) {
        let newIndex = -1;
        state.items.forEach((item, index) => {
          if (item.comic.id === action.payload.comic.id) {
            newIndex = index;
          }
        });

        if (newIndex >= 0) {
          // eslint-disable-next-line no-param-reassign
          state.items[newIndex] = action.payload;
        }
      }
    },
    remove: (state, action) => {
      if (isComic(action.payload)) {
        state.items.filter((item) => item.comic.id !== action.payload.id);
      }
    },
  },
});

export const { add, remove, update } = bagSlice.actions;

export const selectBag = (state: RootState) => state.bag.items;

export const selectBagAmount = (state: RootState) => state.bag.items.length;

export default bagSlice.reducer;
