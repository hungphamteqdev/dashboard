import { toggleMenuSidebar } from '@/store/slices/menuSidebarSlice';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useAppSelector } from './../config';
import { toggleAccountSidebar } from './accountSidebarSlice';

const backdropSlice = createSlice({
  name: 'app-backdrop',
  initialState: { show: false },
  reducers: {
    toggleBackdrop: (state, action: PayloadAction<boolean>) => {
      if (action.payload) {
        state.show = true;
      } else {
        state.show = false;
      }
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(toggleMenuSidebar, (state, action) => {
      state.show = action.payload;
    });
    builder.addCase(toggleAccountSidebar, (state, action) => {
      state.show = action.payload;
    });
  },
});

export const useBackdropSelector = () =>
  useAppSelector((state) => state['app-backdrop']);
export const { toggleBackdrop } = backdropSlice.actions;
export default backdropSlice.reducer;
