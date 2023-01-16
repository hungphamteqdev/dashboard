import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import accountSidebarReducer from './slices/accountSidebarSlice';
import backdropReducer from './slices/backdropSlice';
import menuSidebarReducer from './slices/menuSidebarSlice';


export const store = configureStore({
  reducer: {
    'account-sidebar': accountSidebarReducer ,
    'menu-sidebar': menuSidebarReducer,
    'app-backdrop': backdropReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;