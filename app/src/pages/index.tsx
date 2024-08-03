import React, { useState } from 'react';
import CoinTable from '../components/coinTable';
import Modal from '../components/Modal';
import styles from "../../assets/Home.module.css";

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.container}>
      <h1>Real-Time Data</h1>
      <button onClick={() => setIsModalOpen(true)}>Change Stock/Crypto</button>
      <CoinTable />
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Home;
