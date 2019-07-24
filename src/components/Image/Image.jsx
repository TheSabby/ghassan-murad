import React from 'react';
import styles from './Image.module.css';

export default function Image(props) {
  const { image, style, ...rest } = props;

  return (
    <div
      className={styles.image}
      style={{ backgroundImage: `url(${image})`, ...style }}
      {...rest}
    />
  );
}
