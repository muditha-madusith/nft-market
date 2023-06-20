import React, { useEffect, useState } from 'react';
import styles from './index.module.css';
import Image from 'next/image';
import cover from '../../../public/images/cover.png';
import userPro from '../../../public/images/user.png';
import { useRouter } from 'next/router';
import axios from 'axios';

const ProfileHead = () => {

  interface user {
    profileUrl: string;
  }

  const router = useRouter();
  const { name, id }:any = router.query;
  // console.log(id);

  const [user, setUser] = useState<user | null>(null);
  
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`https://nft-market-api-production.up.railway.app/api/user/users/${id}`);
        setUser(response.data);
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchUserDetails();
  }, [id]);

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
                  src={user && user.profileUrl ? user.profileUrl : userPro}
                  alt='ProfileImage'
                  className={styles.pro4to}
                  width={300}
                  height={300}>
                  </Image>
                  <h2>{name}</h2>
            </div>
        </div>
    </div>
  )
}

export default ProfileHead;
