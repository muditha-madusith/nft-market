import React from 'react'
import styles from './index.module.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import Image from 'next/image';
import { useRouter } from 'next/router';


const NFTcardMobile = ({ id, src, name, price, likes}:any) => {
  
  const router = useRouter();

  const handleClick = () => {
    router.push({
      pathname: '/nft-item',
      query: { id: id, name: name, price: price },
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
              <p className={styles.p1}>ETH</p>
            </div>
          </div>
        </div>
      </div>
  )
}
export default NFTcardMobile;