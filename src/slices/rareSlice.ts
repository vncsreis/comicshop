/* eslint-disable import/no-cycle */

import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

interface Rare {
  ids: number[];
}

const initialState: Rare = {
  ids: [],
};

export const rareSlice = createSlice({
  name: 'rare',
  initialState,
  reducers: {
    add: (state, action) => {
      if (state.ids.indexOf(action.payload) === -1 && state.ids.length <= 200) {
        state.ids.push(action.payload);
      }
    },
  },
});

export const { add } = rareSlice.actions;

export const selectRare = (state: RootState) => state.rare.ids;

export default rareSlice.reducer;
