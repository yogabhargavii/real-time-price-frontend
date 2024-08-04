import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Coin {
  symbol: string;
  rate: number;
  volume: number;
}

export interface CoinState {
  coins: Coin[];
}

export const initialState: CoinState = {
  coins: [],
};

export const coinSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    setCoins(state, action: PayloadAction<Coin[]>) {
      state.coins = action.payload;
    },
  },
});

export const { setCoins } = coinSlice.actions;
export default coinSlice.reducer;
