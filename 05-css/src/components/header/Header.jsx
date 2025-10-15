import React from 'react'
import styles from "./Header.module.css"

const Header = () => {
  return (
    <div className={styles.header}>
         Sing is  King 
         <button className={styles.btn}>
            click me
         </button>
    </div>
  )
}

export default Header