import React from 'react';
import classnames from 'classnames';
import styles from './Card.module.css';

function Card(props) {
  const { children, className, ...rest } = props;
  return (
    <div {...rest} className={classnames(styles.card, className)}>
      {children}
    </div>
  );
}

export default Card;
