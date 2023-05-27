import React from 'react'
import styles from './index.module.css'
import { Grid } from '@/components/Grid'

export const Section3 = () => {
  return (
    <>
      <div className={styles.back}>
        <div className={styles.content}>
          <div className={styles.h3_div}>
            <h3 className={styles.h3}>Hot Bids</h3>
          </div>
          <Grid/>
        </div>
      </div>
    </>
  )
}
