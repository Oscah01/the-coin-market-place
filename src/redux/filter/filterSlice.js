import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currency: 'usd',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.currency = action.payload;
    },
  },
});

export const { setCurrency } = filterSlice.actions;

export default filterSlice.reducer;

export const selectCurrency = (state) => state.filters.currency;
