import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './index.module.css'
import axios from 'axios';

// Define the type for user details
interface UserDetails {
    profileUrl: string;
}

const ProfilePhoto = ({id}:any) => {

  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

  useEffect(() => {
    axios.get(`https://nft-market-api-production.up.railway.app/api/user/users/${id}`)
    .then((response) => {
        if(!userDetails){
            setUserDetails(response.data);
        }
        // console.log(userDetails);
    })
    .catch((error) => {
      console.log(error);
    });
  })

  if (!userDetails) {
    return <div>Loading...</div>;
  }


  return (
    <Image src={userDetails.profileUrl} alt="profile" width={150} height={150} className={styles.profile} />
  )
}

export default ProfilePhoto;