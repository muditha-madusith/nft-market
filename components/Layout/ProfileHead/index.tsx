import React from 'react'
import styles from './index.module.css'
import Image from 'next/image';
import cover from '../../../public/images/cover.png'
import profile from '../../../public/images/profile.png'
import profile1 from '../../../public/images/profile1.png'
import profile2 from '../../../public/images/profile2.png'
import profile3 from '../../../public/images/profile3.png'
import profile4 from '../../../public/images/profile4.png'
import { useRouter } from 'next/router';

const ProfileHead = () => {

  const router = useRouter();

  const { name }:any = router.query;
  // console.log(src);


  let imageUrl;
  if (name === 'Mia Ayana') {
      imageUrl = profile;
  }    
  else if (name === 'Rian Leon') {
      imageUrl = profile1;
  }
  else if (name === 'Lady Young') {
      imageUrl = profile2;
  }
  else if (name === 'Black Glass') {
      imageUrl = profile3;
  }
  else if (name === 'Budhiman') {
      imageUrl = profile4;
  }
  else{
      imageUrl = cover;
  }


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
                  src={imageUrl}
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
