import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { setCoins } from '../redux/coinSlice';
import { fetchCoins } from '../utils/fetchData';
import { selectCoins } from '../redux/selectors';
import styles from '../../assets/Home.module.css';

const CoinTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const coins = useSelector(selectCoins);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchCoins();
      dispatch(setCoins(data));
    };

    getData();
  }, [dispatch]);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Price</th>
          <th>Volume</th>
        </tr>
      </thead>
      <tbody>
        {coins.map((coin) => (
          <tr key={coin.symbol}>
            <td>{coin.symbol}</td>
            <td>{coin.price}</td>
            <td>{coin.volume}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CoinTable;
