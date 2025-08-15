import React from 'react';
import { COMPANY_INFO } from '../../constants';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <h1 className={styles.logo}>
          {COMPANY_INFO.name}
          <span className={styles.tagline}>{COMPANY_INFO.tagline}</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;