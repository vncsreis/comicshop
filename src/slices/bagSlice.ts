/* eslint-disable import/no-cycle */

import { createSlice } from '@reduxjs/toolkit';
import Comic from '../models/Comic';
import { RootState } from '../store/store';

function isBagItem(item: any): item is BagItem {
  return (
    item &&
    item.comic &&
    item.comic instanceof Comic &&
    item.amount &&
    typeof item.amount === 'number'
  );
}

interface BagItem {
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
        state.items.forEach((item, index) => {
          if (item.comic.id === action.payload.comic.id) {
            // eslint-disable-next-line no-param-reassign
            state.items[index].amount = action.payload.amount;
          }
        });
      }
    },
    remove: (state, action) => {
      if (action.payload instanceof Comic) {
        state.items.filter((item) => item.comic.id !== action.payload.id);
      }
    },
  },
});

export const { add, remove } = bagSlice.actions;

export const selectBag = (state: RootState) => state.bag.items;

export const selectBagAmount = (state: RootState) => state.bag.items.length;

export default bagSlice.reducer;
