'use client';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './src/redux/store'; 
import axios from 'axios';
import { useEffect } from 'react';
import styles from './assets/Home.module.css';
import { setCoins } from './src/redux/coinSlice';

interface Coin {
  symbol: string;
  rate: number;
  volume: number;
}

const Home = () => {
  const dispatch: AppDispatch = useDispatch();
  const coins = useSelector((state: RootState) => state.coins.coins);

  useEffect(() => {
    axios.get('http://localhost:3001/api/coins')
      .then(response => {
        dispatch(setCoins(response.data));
      })
      .catch(error => console.error('Error fetching coins:', error));
  }, [dispatch]);

  return (
    <main className={styles.container}>
      <h1>Real-Time Stock and Crypto Prices</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Price</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin: Coin) => (
            <tr key={coin.symbol}>
              <td>{coin.symbol}</td>
              <td>{coin.rate}</td>
              <td>{coin.volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Home;
