import React, { useState } from 'react'
import styles from './index.module.css'
import Image from 'next/image';
import { useRouter } from 'next/router';

const NFTcardDesktop = ({ id, src, name, price }:any) => {



  const router = useRouter();

  const handleClick = () => {
    router.push({
      pathname: '/nft-item',
      query: { id: id },
    });
  };

  return (
      <div className={styles.back} onClick={handleClick}>
        <div className={styles.card}>
          <div className={styles.im}>
            <Image
              className={styles.img}
              src={src}
              alt='NFT'
              width={300}
              height={300}>
            </Image>
          </div>
          <div className={styles.nft_name}>
            <p className={styles.p}>{name}</p>
          </div>
          <div className={styles.price_likes}>
            <div className={styles.price}>
              <p className={styles.p1}><b>{price}</b></p>
              <p className={styles.p1}>USD</p>
            </div>
          </div>
        </div>
      </div>
  )
}
export default NFTcardDesktop;