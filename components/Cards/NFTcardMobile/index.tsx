import React from 'react'
import styles from './index.module.css'
import NFT from '../../../public/images/NFT.png'
import FavoriteIcon from '@mui/icons-material/Favorite';
import Link from 'next/link';
import Image from 'next/image';


const NFTcardMobile = () => {
  return (
    <Link href="/nft-item" style={{ textDecoration: 'inherit', color: 'white' }}>
      <div className={styles.back}>
        <div className={styles.card}>
          <div className={styles.im}>
            <Image
              className={styles.img}
              src={NFT}
              alt='NFT'>
            </Image>
          </div>
          <div className={styles.nft_name}>
            <p className={styles.p}>Abstact Smoke Red Blue</p>
          </div>
          <div className={styles.price_likes}>
            <div className={styles.price}>
              <p className={styles.p1}><b>1.25</b></p>
              <p className={styles.p1}>ETH</p>
            </div>
            <div className={styles.likes}>
              <FavoriteIcon
                className={styles.icon} />
              <p className={styles.p1}>92</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default NFTcardMobile;