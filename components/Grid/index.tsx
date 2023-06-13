import React, { useEffect, useState } from 'react';
import styles from './index.module.css';
import NFTcardDesktop from '../Cards/NFTcardDesktop';
import NFTcardMobile from '../Cards/NFTcardMobile';
import axios from 'axios';

type NFT = {
  image: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
  creator: string;
  _id: string;
};

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
    setShowLoadMore(nextVisible < nfts.length); // Check if there are more items to show
  };
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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

      {isClient && showLoadMore && (
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
