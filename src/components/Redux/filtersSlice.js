import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    filterContact(state, action) {
      return (state = action.payload);
    },
  },
});

export const getFilters = state => state.filters;

export const filtersReduser = filtersSlice.reducer;

export const { filterContact } = filtersSlice.actions;
