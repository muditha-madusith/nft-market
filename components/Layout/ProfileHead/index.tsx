import React from 'react'
import styles from './index.module.css'
import Image from 'next/image';
import cover from '../../../public/images/cover.png'
import userPro from '../../../public/images/user.png'
import { useRouter } from 'next/router';

const ProfileHead = () => {

  const router = useRouter();

  const { name }:any = router.query;
  // console.log(src);



  return (
    <div className={styles.back}>
        <div className={styles.cover4to}>
            <Image
            src={cover}
            alt='CoverImage'
            style={{padding: 0, objectFit: 'cover', width: '100%', height: '100%'}}>
            </Image>
        </div>
        <div className={styles.prsect}>
            <div className={styles.prnm}>
                  <Image
                  src={userPro}
                  alt='ProfileImage'
                  className={styles.pro4to}>
                  </Image>
                  <h2>{name}</h2>
            </div>
        </div>
    </div>
  )
}

export default ProfileHead;
