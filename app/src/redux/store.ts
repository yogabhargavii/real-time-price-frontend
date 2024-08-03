import { configureStore } from '@reduxjs/toolkit';
import coinReducer from './coinSlice';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    coins: coinReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
