import React from 'react';

import styles from './styles.module.css';
import Sidebar from './SideBar';
import Header from './Header'
function Layout({ children }) {
  

  return (
    <div>

<Header/>
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.render_body}>{children}</div>
    </div>
    </div>
  );
}

export default Layout;
