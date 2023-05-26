import React from 'react'
import styles from './index.module.css'
import { SellercardDesktop } from '@/components/Cards/SellercardDesktop'
import { Carousel } from '@/components/Carousel/Carousel'

export const Section2 = () => {
  return (
    <>
      <div className={styles.back}>
        <div className={styles.content}>
          <h3 className={styles.h3}>Top Sellers</h3>
          <Carousel />
        </div>
      </div>
    </>
  )
}
