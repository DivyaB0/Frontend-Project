import React from 'react';

import Link from 'next/link';

import styles from './styles.module.css';

import NAV_OPTIONS from '../Utils/nav_options'

function Sidebar() {
  
  return (
    <div className={styles.container}>
      
     
      

      <div className={styles.nav_items}>
      {NAV_OPTIONS.map((item, index) => (
        <div key={index} className={styles.nav_div}>
          {item?.menu_icon}
           <Link key={index} className={styles.nav_link} href={item.link}>{item.name}</Link>
          </div>
))}

      </div>
     
    </div>
  );
}

export default Sidebar;
