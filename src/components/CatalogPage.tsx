import React from 'react';
import styles from './CatalogPage.module.scss';

export const CatalogPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mobile phones</h1>
    </div>
    <div className={styles.itemsContainer}>
      <div className={styles.card} />
      <div className={styles.card} />        
      <div className={styles.card} />
      <div className={styles.card} />
      <div className={styles.card} />
      <div className={styles.card} />
      <div className={styles.card} />
    </div>
  );
};
