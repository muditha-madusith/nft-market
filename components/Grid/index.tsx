import React, { FunctionComponent, useEffect, useState } from 'react';
import styles from './index.module.css';
import NFTcardDesktop from '../Cards/NFTcardDesktop';
import NFTcardMobile from '../Cards/NFTcardMobile';
import axios from 'axios';
import { AppActions } from '@/redux/actions/AppActions';
import { GetUserDetails } from '@/redux/actions/auth';
import { AppState } from '@/redux/store';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { GetAllUsers } from '@/redux/actions/users';

type NFT = {
  image: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
  creator: string;
  _id: string;
};

// interface LinkStateProps {
// }

// interface LinkDispatchProps {
//   GetAllUsers: () => any
// }

// interface ComponentsProps {
// }

// type Props = LinkStateProps & LinkDispatchProps & ComponentsProps;


const Grid = () => {
  
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [visibleNfts, setVisibleNfts] = useState<NFT[]>([]);
  const [showLoadMore, setShowLoadMore] = useState(true);

  useEffect(() => {
    axios
      .get('https://nft-market-api-production.up.railway.app/api/nft/all-nfts', {})
      .then((response) => {
        setNfts(response.data);
        setVisibleNfts(response.data.slice(0, 8)); // Show the first 8 items
        setShowLoadMore(response.data.length > 8); // Check if there are more items to show
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleLoadMore = () => {
    const currentlyVisible = visibleNfts.length;
    const nextVisible = currentlyVisible + 8; // Increase the visible items by 8
    setVisibleNfts(nfts.slice(0, nextVisible));
    setShowLoadMore(nextVisible < nfts.length); // Check if there are more items to show 101 < 100
  };
  const [isClient, setIsClient] = useState(false);

  const windowInnerWidth = isClient ? window.innerWidth : undefined;

  return (
    <>
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

      { showLoadMore && (
        <div className={styles.load_button}>
          <button className={styles.lm_btn} onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default Grid;

// const mapStateToProps = (state: AppState): LinkStateProps => ({
//   auth: state.auth
// });

// const mapDispatchToProps = (
//   dispatch: ThunkDispatch<any, any, AppActions>
// ): LinkDispatchProps => ({
//   GetAllUsers: bindActionCreators(GetAllUsers, dispatch)
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Grid);