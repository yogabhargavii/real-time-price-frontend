import { CoinState } from './coinSlice';

interface PersistedState {
  coins: CoinState;
}

export const loadState = (): PersistedState => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return { coins: { coins: [] } }; 
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return { coins: { coins: [] } }; 
  }
};

// Save state to localStorage
export const saveState = (state: PersistedState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // Handle errors here
  }
};
