import React, { useEffect } from 'react'
import styles from './index.module.css'
import Image from 'next/image';
import profile from '../../../public/images/profile.png'
import { useState } from 'react';
import CheckoutPop from '../PopUp/CheckoutPop';
import Link from 'next/link';
import DetailsComp from './DetailsComp';
import HistoryComp from './HistoryComp';
import OffersComp from './OffersComp';
import { useRouter } from 'next/router';
import axios from 'axios';


interface NftDetails {
    image: string;
    name: string;
    price: number;
    description: string;
    creator: string;
    quantity: number;
}

interface CreatorDetails{
    username: string;
    profileUrl: string;
}



const ItemInfo = () => {

    const [isOpen, setIsOpen]: any = useState(false);
    const [detailsOpen, setDetailsOpen]: any = useState(true);
    const [offersOpen, setOffersOpen]: any = useState(false);
    const [historyOpen, setHistoryOpen]: any = useState(false);

    const clickDetails: any = () => {
        setDetailsOpen(true);
        setHistoryOpen(false);
        setOffersOpen(false);
    }
    const clickOffers: any = () => {
        setDetailsOpen(false);
        setHistoryOpen(false);
        setOffersOpen(true);
    }
    const clickHistory: any = () => {
        setDetailsOpen(false);
        setHistoryOpen(true);
        setOffersOpen(false);
    }


    const router = useRouter();

    const handleClick = () => {
      router.push({
        pathname: '/profile',
        query: { id: creatorId, name: creatorDetails?.username },
      });
      // console.log(id);
    };

    const { id }: any = router.query;
    // console.log(src);

    const [nftDetails, setNftDetails] = useState<NftDetails | null>(null);
    const [creatorDetails, setCreatorDetails] = useState<CreatorDetails | null>(null);

    const creatorId = nftDetails?.creator;

    useEffect(() => {
        axios.get(`https://nft-market-api-production.up.railway.app/api/nft/nfts/${id}`)
            .then((response) => {
                if (!nftDetails) {
                    setNftDetails(response.data);
                }
                // console.log(userDetails);

                if(nftDetails) {
                    axios.get(`https://nft-market-api-production.up.railway.app/api/user/users/${creatorId}`)
                    .then((response) => {
                        setCreatorDetails(response.data)
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });


    }, [id, nftDetails])

    return (
        <>
            {isOpen && (
                <>
                    <CheckoutPop setIsOpen={setIsOpen} isOpen={isOpen} />
                </>
            )}
            <div className={styles.back}>
                <div className={styles.left_side}>
                    {nftDetails && (
                        <Image
                            src={nftDetails.image}
                            alt='NFT'
                            className={styles.img}
                            width={300}
                            height={300}
                        />
                    )}
                </div>
                <div className={styles.right_side}>
                    <div className={styles.content1}>
                        {nftDetails && (
                            <>
                                <p className={styles.p}>{nftDetails.name}</p>
                                <p className={styles.p1}>
                                    From <b>{nftDetails.price} ETH</b> - {nftDetails.quantity} of {nftDetails.quantity} available
                                </p>
                            </>
                        )}
                    </div>
                    <div className={styles.content2}>
                        <p className={styles.p2}>Creator</p>
                        {/* <Link href="/profile" style={{ textDecoration: 'inherit', color: 'white' }}> */}
                        {creatorDetails && (
                            <div className={styles.c_details} onClick={handleClick}>
                                <Image src={creatorDetails.profileUrl} alt="pro-pic" className={styles.small_pro} width={100} height={100} />
                                <p className={styles.name}>{creatorDetails.username}</p>
                            </div>
                        )}
                        {/* </Link> */}
                    </div>
                    <div className={styles.content3}>
                        <ul className={styles.ul}>
                            <li
                                className={detailsOpen ? styles.activeDetails : styles.li}
                                onClick={clickDetails}
                            >
                                Details
                            </li>
                            <li
                                className={offersOpen ? styles.activeOffers : styles.li}
                                onClick={clickOffers}
                            >
                                Offers
                            </li>
                            <li
                                className={historyOpen ? styles.activeHistory : styles.li}
                                onClick={clickHistory}
                            >
                                History
                            </li>
                        </ul>

                        {detailsOpen && nftDetails && <DetailsComp desc={nftDetails.description}/>}
                        {historyOpen && <HistoryComp />}
                        {offersOpen && <OffersComp />}

                        <div className={styles.btns}>
                            <div>
                                <button className={styles.buybtn} onClick={() => setIsOpen(true)}>
                                    Buy for {nftDetails?.price} ETH
                                </button>
                            </div>
                            <div>
                                <button className={styles.ofrbtn}>Make Offer</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ItemInfo;