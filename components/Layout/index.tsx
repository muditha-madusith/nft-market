import React from 'react'
import styles from './index.module.css';
import NavIndex from './NavBar';
import Footer from './Footer';

const Layout = ({children}:any) => {

  return (
    <div className={styles.mainDiv}>

      <div className={styles.topNav}>
        <NavIndex />
      </div>

      <div className={styles.childrenDiv}>
        <main>{children}</main>
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}


export default Layout;