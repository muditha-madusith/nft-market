import React, { FunctionComponent, useEffect, useState } from 'react'
import styles from './index.module.css'
import { GetUserNfts } from '@/redux/actions/auth';
import NFTcardDesktop from '../Cards/NFTcardDesktop';
import NFTcardMobile from '../Cards/NFTcardMobile';
import { AppActions } from '@/redux/actions/AppActions';
// import { AppState } from '@/redux/store';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { GetBoughtItems } from '@/redux/actions/payment';

type NFT = {
  image: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
  creator: string;
  _id: string;
};

interface AppState {
  auth: {
    userDetails: {
      id: string;
    };
  };
  payment: {
    nftS: []; // Add the 'nftS' property here
  };
}


interface LinkStateProps {
  id: string;
  nftS: []
}

interface LinkDispatchProps {
  GetBoughtItems: (id: string) => void
}

interface ComponentsProps {
}

type Props = LinkStateProps & LinkDispatchProps & ComponentsProps;


const BoughtItems: FunctionComponent<Props> = ({ id, GetBoughtItems, nftS  }) => {

  const [nfts, setNfts] = useState<NFT[]>([]);
  const [visibleNfts, setVisibleNfts] = useState<NFT[]>([]);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth); // Initial inner width

  const [isClient, setIsClient] = useState(false);


  useEffect(() => {
    if (typeof window !== 'undefined') {
      setInnerWidth(window.innerWidth); // Set the initial inner width
      setIsClient(true);
    }
  }, []);

  useEffect(() => {
    GetBoughtItems(id);
  }, []);

  useEffect(() => {
      setNfts(nftS);
      setVisibleNfts(nftS.slice(0, 8));
      setShowLoadMore(nftS.length > 8);
  }, [nftS]);

  const handleLoadMore = () => {
    const currentlyVisible = visibleNfts.length;
    const nextVisible = currentlyVisible + 8; // Increase the visible items by 8
    setVisibleNfts(nfts.slice(0, nextVisible));
    setShowLoadMore(nextVisible < nfts.length); // Check if there are more items to show
  };


  return (
    <div className={styles.main}>
      <div className={styles.head}>
        <h1>My Bought Items</h1>
      </div>
      <div className={styles.grid}>
        <div className={styles.wrapper}>
          {visibleNfts.map((nft) => (
            <React.Fragment key={nft._id}>
              {isClient && innerWidth > 612 && (
                <NFTcardDesktop
                  className={styles.card}
                  id={nft._id}
                  src={nft.image}
                  name={nft.name}
                  price={nft.price}
                  quantity={nft.quantity}
                  description={nft.description}
                  creator={nft.creator} />
              )}
              {isClient && innerWidth < 612 && (
                <NFTcardMobile
                  className={styles.card}
                  _id={nft._id}
                  src={nft.image}
                  name={nft.name}
                  price={nft.price}
                  quantity={nft.quantity}
                  description={nft.description}
                  creator={nft.creator}
                />
              )}
            </React.Fragment>
          ))}
        </div>
        <div className={styles.load_button}>
          {showLoadMore && (
            <button className={styles.lm_btn} onClick={handleLoadMore}>
              Load More
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state: AppState): LinkStateProps => ({
  id: state.auth.userDetails.id,
  nftS: state.payment.nftS,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
  GetBoughtItems: bindActionCreators(GetBoughtItems, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(BoughtItems);