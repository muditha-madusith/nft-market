import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NFTcardDesktop from '../Cards/NFTcardDesktop';
import styles from './index.module.css';
import NFTcardMobile from '../Cards/NFTcardMobile';

type NFT = {
  image: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
  creator: string;
  _id: string;
};

const MyItemGrid = ({ id }: any) => {
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [visibleNfts, setVisibleNfts] = useState<NFT[]>([]);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth); // Initial inner width

  useEffect(() => {
    axios
      .get('https://nft-market-api-production.up.railway.app/api/nft/my-nfts', {
        headers: {
          Authorization: `Bearer ${id}`,
        },
      })
      .then((response) => {
        setNfts(response.data);
        setVisibleNfts(response.data.slice(0, 8)); // Show the first 8 items
        setShowLoadMore(response.data.length > 8); // Check if there are more items to show
      })
      .catch((error) => {
        console.log(error);
      });

      const handleResize = () => {
        setInnerWidth(window.innerWidth); // Update inner width on window resize
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize); // Cleanup event listener on component unmount
      };
  }, []);

  const handleLoadMore = () => {
    const currentlyVisible = visibleNfts.length;
    const nextVisible = currentlyVisible + 8; // Increase the visible items by 8
    setVisibleNfts(nfts.slice(0, nextVisible));
    setShowLoadMore(nextVisible < nfts.length); // Check if there are more items to show
  };

  return (
    <>
      <div className={styles.wrapper}>
        {visibleNfts.map((nft) => (
          <React.Fragment key={nft._id}>
            {innerWidth > 612 && (
            <NFTcardDesktop
            className={styles.card}
            _id={nft._id}
            src={nft.image}
            name={nft.name}
            price={nft.price}
            quantity={nft.quantity}
            description={nft.description}
            creator={nft.creator} />
            )}
            {innerWidth < 612 && (
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
    </>
  );
};

export default MyItemGrid;

