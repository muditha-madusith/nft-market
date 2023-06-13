import React from 'react'
import styles from './index.module.css'
import  Grid  from '@/components/Grid'

const Section3 = () => {
  return (
    <>
      <div className={styles.back}>
        <div className={styles.content}>
          <div className={styles.h3_div}>
            <h3 className={styles.h3}>All NFT'S</h3>
          </div>
          <Grid/>
        </div>
      </div>
    </>
  )
}
export default Section3;