import React, { FunctionComponent, useEffect, useState } from 'react';
import styles from './index.module.css';
import Image from 'next/image';
import cover from '../../../public/images/cover.png';
import { useRouter } from 'next/router';
import { AppActions } from '@/redux/actions/AppActions';
import { GetSelectedUserDetails } from "../../../redux/actions/selecteduser/index"

import { AppState } from '@/redux/store';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

interface LinkStateProps {
  userDet: any;
}

interface LinkDispatchProps {
  GetSelectedUserDetails: (id: string) => void
}

interface ComponentsProps {
}

type Props = LinkStateProps & LinkDispatchProps & ComponentsProps;


const ProfileHead: FunctionComponent<Props> = ({GetSelectedUserDetails, userDet}) => {

  
  const router = useRouter();
  const { id }:any = router.query;

  
  useEffect(() => {
    GetSelectedUserDetails(id);
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
                  src={userDet.profile_pic}
                  alt='ProfileImage'
                  className={styles.pro4to}
                  width={300}
                  height={300}>
                  </Image>
                  <h2>{userDet.name}</h2>
            </div>
        </div>
    </div>
  )
}


const mapStateToProps = (state: AppState): LinkStateProps => ({
  userDet: state.selectedUser.userDetails
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
  GetSelectedUserDetails: bindActionCreators(GetSelectedUserDetails, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileHead);
