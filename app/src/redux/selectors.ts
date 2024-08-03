import { RootState } from './store';

export const selectCoins = (state: RootState) => state.coins.coins;
