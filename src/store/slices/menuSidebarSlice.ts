import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useAppSelector } from './../config';
import { toggleBackdrop } from './backdropSlice';

const menuSidebarSlice = createSlice({
  name: 'menu-sidebar',
  initialState: {show: false},
  reducers: {
    toggleMenuSidebar: (state, action: PayloadAction<boolean>) => {
      state.show = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(toggleBackdrop, (state, action) => {
      state.show = action.payload;
    })
  }
});


export const useMenuSidebarSelector = () => useAppSelector(state => state['menu-sidebar'])
export const {toggleMenuSidebar} = menuSidebarSlice.actions;
export default menuSidebarSlice.reducer;