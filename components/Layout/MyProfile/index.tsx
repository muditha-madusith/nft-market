import React, { FunctionComponent, useEffect, useState } from 'react';
import styles from './index.module.css';
import MyItemGrid from '@/components/MyItems_Grid';
import ProfilePhoto from './ProfilePhoto';
import { AppState } from '@/redux/store';
import { connect } from 'react-redux';


interface LinkStateProps {
  name: string;
  id: string;
}

interface LinkDispatchProps {
}

interface ComponentsProps {
}

type Props = LinkStateProps & LinkDispatchProps & ComponentsProps;


const MyProfile: FunctionComponent<Props> = ({name, id}) => {

  return (
    <div className={styles.main}>
      <div className={styles.head}>
        <ProfilePhoto/>
        <h2>{name}</h2>
      </div>
      <div className={styles.body}>
        <MyItemGrid/>
      </div>
    </div>
  );
};


const mapStateToProps = (state: AppState): LinkStateProps => ({
  name: state.auth.userDetails.name,
  id: state.auth.userDetails.id
});


export default connect(mapStateToProps)(MyProfile);