import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { setCoins } from '../redux/coinSlice';
import { fetchCoinsForSymbol } from '../utils/fetchData';
import styles from '../styles/Home.module.css';

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const dispatch = useDispatch<AppDispatch>();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async () => {
    if (inputRef.current) {
      const symbol = inputRef.current.value;
      const data = await fetchCoinsForSymbol(symbol);
      dispatch(setCoins(data));
      onClose();
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Change Symbol</h2>
        <input type="text" ref={inputRef} />
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
