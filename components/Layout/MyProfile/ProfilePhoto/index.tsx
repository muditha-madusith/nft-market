import React, { FunctionComponent, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './index.module.css'
import { AppState } from '@/redux/store';
import { connect } from 'react-redux';


interface LinkStateProps {
  pro_pic: string;
}

interface LinkDispatchProps {
}

interface ComponentsProps {
}

type Props = LinkStateProps & LinkDispatchProps & ComponentsProps;


const ProfilePhoto: FunctionComponent<Props> = ({pro_pic}) => {

  return (
    <>
    <Image src={pro_pic} alt="profile" width={150} height={150} className={styles.profile} />
    </>
  )
}

// export default ProfilePhoto;

const mapStateToProps = (state: AppState): LinkStateProps => ({
  pro_pic: state.auth.userDetails.profile_pic
});


export default connect(mapStateToProps)(ProfilePhoto);