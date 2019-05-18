import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import Icon from './Icon';
import styles from './NavLink.module.css';

function NavLink(props) {
  const { to = '/', text, pattern = 'circles' } = props;

  function renderIcon() {
    switch (pattern) {
      case 'circles':
        return <Icon type="circle" />;
      case 'squares':
        return <Icon type="square" />;
      case 'triangles':
        return <Icon type="triangle" />;
      default:
        return <Icon type="circle" />;
    }
  }

  return (
    <Link to={to} className={styles.container} activeClassName={styles.active}>
      {renderIcon()}
      <span className={styles.text}>{text}</span>
    </Link>
  );
}

export default NavLink;
