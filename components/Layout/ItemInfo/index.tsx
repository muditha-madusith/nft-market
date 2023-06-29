import React, { FunctionComponent, useEffect } from 'react'
import styles from './index.module.css'
import Image from 'next/image';
import { useState } from 'react';
import CheckoutPop from '../PopUp/CheckoutPop';
import DetailsComp from './DetailsComp';
import HistoryComp from './HistoryComp';
import OffersComp from './OffersComp';
import { useRouter } from 'next/router';

import { AppActions } from '@/redux/actions/AppActions';
import { GetSelectedNftDetails } from '@/redux/actions/selectednft';
import { GetSelectedUserDetails } from '@/redux/actions/selecteduser';
import { AppState } from '@/redux/store';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';


interface NftDetails {
    image: string;
    name: string;
    price: number;
    description: string;
    creator: string;
    quantity: number;
}

interface CreatorDetails {
    name: string;
    profile_pic: string;
}


interface LinkStateProps {
    snftD: any;
    susrD: any;
    logedUser: string;
}

interface LinkDispatchProps {
    GetSelectedNftDetails: (id: string) => void
    GetSelectedUserDetails: (id: string) => void
}

interface ComponentsProps {
}

type Props = LinkStateProps & LinkDispatchProps & ComponentsProps;


const ItemInfo: FunctionComponent<Props> = ({ GetSelectedNftDetails, GetSelectedUserDetails, snftD, susrD, logedUser }) => {

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
            query: { id: creatorId, name: creatorDetails?.name },
        });
    };

    const { id }: any = router.query;
    // console.log(src);

    const [nftDetails, setNftDetails] = useState<NftDetails | null>(null);
    const [creatorDetails, setCreatorDetails] = useState<CreatorDetails | null>(null);
    const [error, setError] = useState("");

    const creatorId = nftDetails?.creator;

    useEffect(() => {
        GetSelectedNftDetails(id);
    }, []);

    useEffect(() => {
        setNftDetails(snftD);
    }, [snftD]);

    useEffect(() => {
        GetSelectedUserDetails(snftD.creator)
    }, [snftD])

    useEffect(() => {
        setCreatorDetails(susrD);
    }, [susrD])


    let creator;

    if (snftD.creator === logedUser) {
        creator = true;
    } else if(snftD.quantity <= 0) {
        creator = true;
    } else if (logedUser === "") {
        creator = true;
    } else {
        creator = false;
    }

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
                                    From <b>{nftDetails.price} USD</b> - {nftDetails.quantity} available
                                </p>
                            </>
                        )}
                    </div>
                    <div className={styles.content2}>
                        <p className={styles.p2}>Creator</p>
                        {creatorDetails && (
                            <div className={styles.c_details} onClick={handleClick}>
                                <Image src={creatorDetails.profile_pic} alt="pro-pic" className={styles.small_pro} width={100} height={100} />
                                <p className={styles.name}>{creatorDetails.name}</p>
                            </div>
                        )}
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

                        {detailsOpen && nftDetails && <DetailsComp desc={nftDetails.description} />}
                        {historyOpen && <HistoryComp />}
                        {offersOpen && <OffersComp />}

                        <div className={styles.btns}>
                            <div>
                                {creator ?
                                    (
                                        <button className={styles.buybtn} title='Can`t buy item'>
                                            Buy for {nftDetails?.price} USD
                                        </button>
                                    ) :
                                    (
                                        <button className={styles.buybtn} onClick={() => setIsOpen(true)}>
                                            Buy for {nftDetails?.price} USD
                                        </button>
                                    )
                                }
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


const mapStateToProps = (state: AppState): LinkStateProps => ({
    snftD: state.selectedNft.nftDetails,
    susrD: state.selectedUser.userDetails,
    logedUser: state.auth.userDetails.id
});

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
    GetSelectedNftDetails: bindActionCreators(GetSelectedNftDetails, dispatch),
    GetSelectedUserDetails: bindActionCreators(GetSelectedUserDetails, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemInfo);