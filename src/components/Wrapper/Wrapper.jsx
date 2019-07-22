import React from 'react';
import styles from './Wrapper.module.css';

function Wrapper(props) {
  const { children, ...rest } = props;
  return (
    <div className={styles.wrapper} {...rest}>
      {children}
    </div>
  );
}

export default Wrapper;
