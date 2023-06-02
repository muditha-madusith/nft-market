import React from 'react'
import styles from './index.module.css'
import NFT from '../../../public/images/NFT.png'
import FavoriteIcon from '@mui/icons-material/Favorite';
import Link from 'next/link';
import Image from 'next/image';


const NFTcardMobile = ({src, name, price, likes}:any) => {
  return (
    <Link href="/nft-item" style={{ textDecoration: 'inherit', color: 'white' }}>
      <div className={styles.back}>
        <div className={styles.card}>
          <div className={styles.im}>
            <Image
              className={styles.img}
              src={src}
              alt='NFT'>
            </Image>
          </div>
          <div className={styles.nft_name}>
            <p className={styles.p}>{name}</p>
          </div>
          <div className={styles.price_likes}>
            <div className={styles.price}>
              <p className={styles.p1}><b>{price}</b></p>
              <p className={styles.p1}>ETH</p>
            </div>
            <div className={styles.likes}>
              <FavoriteIcon
                className={styles.icon} />
              <p className={styles.p1}>{likes}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default NFTcardMobile;