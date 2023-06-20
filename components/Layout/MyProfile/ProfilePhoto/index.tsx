import React, { FunctionComponent, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './index.module.css'
import axios from 'axios';
import { AppState } from '@/redux/store';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { AppActions } from '@/redux/actions/AppActions';

// Define the type for user details
interface UserDetails {
    profileUrl: string;
}

interface LinkStateProps {
  pro_pic: string;
}

interface LinkDispatchProps {
}

interface ComponentsProps {
}

type Props = LinkStateProps & LinkDispatchProps & ComponentsProps;


const ProfilePhoto: FunctionComponent<Props> = ({pro_pic}) => {

  // const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

  // useEffect(() => {
  //   axios.get(`https://nft-market-api-production.up.railway.app/api/user/users/${id}`)
  //   .then((response) => {
  //       if(!userDetails){
  //           setUserDetails(response.data);
  //       }
  //       // console.log(userDetails);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // })

  // if (!userDetails) {
  //   return <div>Loading...</div>;
  // }


  return (
    <Image src={pro_pic} alt="profile" width={150} height={150} className={styles.profile} />
  )
}

// export default ProfilePhoto;

const mapStateToProps = (state: AppState): LinkStateProps => ({
  pro_pic: state.auth.userDetails.profile_pic
});


export default connect(mapStateToProps)(ProfilePhoto);