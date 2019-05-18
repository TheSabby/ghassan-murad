import React from 'react';
import styles from './Wrapper.module.css';

function Wrapper(props) {
  const { children } = props;
  return <div className={styles.wrapper}>{children}</div>;
}

export default Wrapper;
