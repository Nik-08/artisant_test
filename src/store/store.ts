import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { productSlice } from './product';

const rootReducer = combineReducers<AppState>({
  product: productSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
