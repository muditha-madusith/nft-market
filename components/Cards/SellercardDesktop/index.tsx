import React from 'react'
import styles from './index.module.css'
import CheckIcon from '@mui/icons-material/Check';
import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from 'next/router';

const SellercardDesktop = ({index, src, name, revenue}: any) => {

  const router = useRouter();

  const handleClick = () => {
    router.push({
      pathname: 'profile',
      query: { name: name },
    });
  };


  return (
      <div className={styles.back} onClick={handleClick}>
        <div className={styles.card}>
          <div className={styles.numbdiv}>
            <div className={styles.number}>{index}</div>
          </div>
          <div className={styles.propic}>
            <Image
              src={src}
              alt='profile'
              className={styles.img}>
            </Image>
            <div className={styles.checkdiv}>
              <div className={styles.check}>
                <CheckIcon
                  style={{ fontSize: 'small' }} />
              </div>
            </div>
          </div>
          <div className={styles.name_revenue}>
            <p className={styles.name}>{name}</p>
            {/* <div className={styles.revenue}>
              <p className={styles.p1}><b>{revenue}</b></p>
              <p className={styles.p1}>ETH</p>
            </div> */}
          </div>
        </div>
      </div>
  )
}
export default SellercardDesktop;