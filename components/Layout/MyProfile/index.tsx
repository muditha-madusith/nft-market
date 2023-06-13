import React, { useEffect, useState } from 'react';
import styles from './index.module.css';
import Image from 'next/image';
import axios from 'axios';
import MyItemGrid from '@/components/MyItems_Grid';
import ProfileComp from '@/components/ProfileComp';
import ProfilePhoto from './ProfilePhoto';

const MyProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios.get('https://nft-market-api-production.up.railway.app/api/user/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        const { user } = response.data;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!user) {
    return <div className={styles.loadingdiv}>Loading...</div>;
  }

  const { id, name }:any = user;


  return (
    <div className={styles.main}>
      <div className={styles.head}>
        <ProfilePhoto id={id}/>
        <h2>{name}</h2>
      </div>
      <div className={styles.body}>
        <MyItemGrid id={id}/>
      </div>
    </div>
  );
};

export default MyProfile;
