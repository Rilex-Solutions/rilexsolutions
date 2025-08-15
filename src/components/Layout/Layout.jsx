import React from 'react';
import { ScrollProgress } from '../';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <ScrollProgress />
      {children}
    </div>
  );
};

export default Layout;