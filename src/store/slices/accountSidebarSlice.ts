import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useAppSelector } from './../config';
import { toggleBackdrop } from './backdropSlice';

const accountSidebarSlice = createSlice({
  name: 'account-sidebar',
  initialState: {show: false},
  reducers: {
    toggleAccountSidebar: (state, action: PayloadAction<boolean>) => {
      state.show = !state.show;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(toggleBackdrop, (state, action) => {
      state.show = action.payload;
    })
  }
});


export const useAccountSidebarSelector = () => useAppSelector(state => state['account-sidebar'])
export const {toggleAccountSidebar} = accountSidebarSlice.actions;
export default accountSidebarSlice.reducer;