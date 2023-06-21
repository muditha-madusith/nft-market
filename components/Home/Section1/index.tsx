import React from 'react'
import styles from './index.module.css'
import Banner from '../../../public/Banner.png'
import Image from 'next/image'


const Section1 = () => {

  return (
    <>

      <div className={styles.black_back}>
        <div className={styles.pink_box}>
          <Image src={Banner} alt='banner' className={styles.bg}></Image>
          <div className={styles.content}>
            <h1 className={styles.h1}>Discover, collect, and sell <br /> extraordinary NFTs</h1>
          </div>
        </div>
      </div>
    </>
  )
}
export default Section1;