import React, { FunctionComponent, useEffect, useState } from 'react'
import styles from './index.module.css'
import ProfileHead from '../Layout/ProfileHead'
import { useRouter } from 'next/router'
import axios from 'axios'
import NFTcardMobile from '../Cards/NFTcardMobile'
import NFTcardDesktop from '../Cards/NFTcardDesktop'

import { AppActions } from '@/redux/actions/AppActions'
import { GetSelectedUserNfts } from "../../redux/actions/selecteduser/index"
import { AppState } from '@/redux/store'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

type NFT = {
  image: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
  creator: string;
  _id: string;
};

interface LinkStateProps {
  userNf: any[];
}

interface LinkDispatchProps {
  GetSelectedUserNfts: (id: string) => void
}

interface ComponentsProps {
}

type Props = LinkStateProps & LinkDispatchProps & ComponentsProps;


const ProfileComp: FunctionComponent<Props> = ({GetSelectedUserNfts, userNf}) => {


  const router = useRouter();
  const { id }:any = router.query;


  const [nfts, setNfts] = useState<NFT[]>([]);
  const [visibleNfts, setVisibleNfts] = useState<NFT[]>([]);
  const [showLoadMore, setShowLoadMore] = useState(true);

  useEffect(() => {
    if (nfts.length === 0) {
      GetSelectedUserNfts(id);
    }
  }, []);

  useEffect(() => {
    setNfts(userNf);
    setVisibleNfts(userNf.slice(0, 8)); // Show the first 8 items
    setShowLoadMore(userNf.length > 8); // Check if there are more items to show
  },[userNf])

  const handleLoadMore = () => {
    const currentlyVisible = visibleNfts.length;
    const nextVisible = currentlyVisible + 8; // Increase the visible items by 8
    setVisibleNfts(nfts.slice(0, nextVisible));
    setShowLoadMore(nextVisible < nfts.length); // Check if there are more items to show
  };
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const windowInnerWidth = isClient ? window.innerWidth : undefined;


  return (
    <>
    <ProfileHead />
    <div className={styles.content}>
    {isClient && windowInnerWidth && windowInnerWidth > 612 && (
        <div className={styles.wrapper}>
          {visibleNfts.map((nft) => (
            <React.Fragment key={nft._id}>
              <NFTcardDesktop
                id={nft._id}
                className={styles.card}
                src={nft.image}
                name={nft.name}
                price={nft.price}
                quantity={nft.quantity}
                description={nft.description}
                creator={nft.creator}
              />
            </React.Fragment>
          ))}
        </div>
      )}

      {isClient && windowInnerWidth && windowInnerWidth < 612 && (
        <div className={styles.wrapper}>
          {visibleNfts.map((nft) => (
            <React.Fragment key={nft._id}>
              <NFTcardMobile
                id={nft._id}
                className={styles.card}
                src={nft.image}
                name={nft.name}
                price={nft.price}
                quantity={nft.quantity}
                description={nft.description}
                creator={nft.creator}
              />
            </React.Fragment>
          ))}
        </div>
      )}

      {isClient && showLoadMore && (
        <div className={styles.load_button}>
          <button className={styles.lm_btn} onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
    </>
  )
}

const mapStateToProps = (state: AppState): LinkStateProps => ({
  userNf: state.selectedUser.userNfts
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
  GetSelectedUserNfts: bindActionCreators(GetSelectedUserNfts, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileComp);