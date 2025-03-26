import React from 'react'
import styles from './styles.module.css';
import { Avatar } from '@mui/material';
const Header = () => {
  return (
    <div className={styles.main_container}>

    <div className={styles.container}>
        <div className={styles.title}>Esollect</div>
        <div className={styles.user_details}>
              <Avatar></Avatar>
              <div className={styles.details}>
              <div className={styles.user_name}>Tushar</div>
              <div className={styles.user_email}>tushar@esollect.com</div>
              </div>

            </div>
       
    </div>
</div>
  )
}

export default Header