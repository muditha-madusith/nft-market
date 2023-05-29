import React from 'react'
import styles from './index.module.css';
import NFT from '../../../../public/images/NFT.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';

import Image from 'next/image';

const PaysuccesPop = () => {
  return (
    <div className={styles.pop}>
        <div className={styles.box}>
            <div className={styles.head}>
                <h2 className={styles.h2}>Payment Successful</h2>
            </div>
            <div className={styles.img_name}>
                <Image
                src={NFT}
                alt='NFT'
                className={styles.img}>
                </Image>
                <div className={styles.b1}>
                    <p className={styles.p1}>You successfully purchased <b>Abstact Smoke Red Blue</b> from <b>Mia Ayana</b></p>
                </div>
            </div>
            <div className={styles.foot}>
                <h3 className={styles.h3}>Share</h3>
                <div className={styles.icons}>
                    <InstagramIcon/>
                    <TwitterIcon/>
                    <TelegramIcon/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PaysuccesPop;