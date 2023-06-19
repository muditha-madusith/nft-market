import React, { FunctionComponent, useEffect, useState } from 'react';
import styles from './index.module.css';
import NFTcardDesktop from '../Cards/NFTcardDesktop';
import NFTcardMobile from '../Cards/NFTcardMobile';

import { AppActions } from '@/redux/actions/AppActions';
import { AppState } from '@/redux/store';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { GetAllNfts } from '@/redux/actions/nfts';

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
  nfts: any[];
}

interface LinkDispatchProps {
  GetAllNfts: () => any
}

interface ComponentsProps {
}

type Props = LinkStateProps & LinkDispatchProps & ComponentsProps;


const Grid: FunctionComponent<Props> = ({GetAllNfts, nfts, }) => {
  
  const [nftsDetails, setNftsDetails] = useState<NFT[]>([]);
  const [visibleNfts, setVisibleNfts] = useState<NFT[]>([]);
  const [showLoadMore, setShowLoadMore] = useState(true);

  const [isClient, setIsClient] = useState(false);


  useEffect(() => {
    setIsClient(true);
    GetAllNfts();
  }, []);

  useEffect(() => {
    setNftsDetails(nfts);
    setVisibleNfts(nfts.slice(0, 8)); // Show the first 8 items
    setShowLoadMore(nfts.length > 8); // Check if there are more items to show
  }, [nfts]);

  const handleLoadMore = () => {
    const currentlyVisible = visibleNfts.length;
    const nextVisible = currentlyVisible + 8; // Increase the visible items by 8
    setVisibleNfts(nfts.slice(0, nextVisible));
    setShowLoadMore(nextVisible < nftsDetails.length); // Check if there are more items to show 101 < 100
  };

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


const mapStateToProps = (state: AppState): LinkStateProps => ({
  nfts: state.nft.nfts,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
  GetAllNfts: bindActionCreators(GetAllNfts, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Grid);