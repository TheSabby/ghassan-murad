import React from 'react';
import styles from './Icon.module.css';

function Icon(props) {
  const { type = 'circle' } = props;

  return (
    <div className={styles.container}>
      <div className={styles[type]} />
      <div className={styles[type]} />
      <div className={styles[type]} />
    </div>
  );
}

export default Icon;
