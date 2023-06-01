import React from 'react'
import styles from './index.module.css'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import SellercardDesktop from '../Cards/SellercardDesktop';
import SellercardMobile from '../Cards/SellercardMobile';
import Profile from '../../public/images/profile.png';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const cardDetails = [
    {
        index: 1,
        src: Profile,
        name: "Mia Ayana",
        revenue: 10
    },
    {
        index: 2,
        src: Profile,
        name: "Mia Ayana",
        revenue: 40
    },
    {
        index: 3,
        src: Profile,
        name: "Mia Ayana",
        revenue: 10
    },
    {
        index: 4,
        src: Profile,
        name: "Mia Ayana",
        revenue: 50
    },
    {
        index: 5,
        src: Profile,
        name: "Mia Ayana",
        revenue: 10
    },
    {
        index: 6,
        src: Profile,
        name: "Mia Ayana",
        revenue: 80
    },
    {
        index: 7,
        src: Profile,
        name: "Mia Ayana",
        revenue: 10
    },
    {
        index: 8,
        src: Profile,
        name: "Mia Ayana",
        revenue: 20
    },
    {
        index: 9,
        src: Profile,
        name: "Mia Ayana",
        revenue: 30
    },
    {
        index: 10,
        src: Profile,
        name: "Mia Ayana",
        revenue: 50
    }
]


const Carousel = () => {
    return (
        <CarouselProvider
            className={styles.carousel}
            naturalSlideWidth={180}
            naturalSlideHeight={200}
            isIntrinsicHeight={true}
            totalSlides={ window.innerWidth > 425 ? cardDetails.length / 4 : cardDetails.length / 2}
        >
            <Slider className={styles.slider}>
                {cardDetails.map((card) => (
                    <Slide
                        key={card.index}
                        className={styles.slide}
                        index={card.index}
                        style={{ width: '180px', height: '200px', margin: '0rem 1rem 0rem 1rem' }}
                    >
                        <SellercardDesktop
                            index={card.index}
                            src={card.src}
                            name={card.name}
                            revenue={card.revenue}
                        />
                    </Slide>
                ))}
            </Slider>

            <Slider className={styles.mobile_slider}>
                {cardDetails.map((card) => (
                    <Slide
                        key={card.index}
                        className={styles.m_slide}
                        index={card.index}
                        style={{ width: '130px', height: '165px', margin: '0rem .7rem 0rem .7rem' }}
                    >
                        <SellercardMobile
                            index={card.index}
                            src={card.src}
                            name={card.name}
                            revenue={card.revenue}
                        />
                    </Slide>
                ))}
            </Slider>
            <div className={styles.btns}>
                <div className={styles.backBtn}>
                    <ButtonBack className={styles.customButton}><KeyboardArrowLeftIcon /></ButtonBack>
                </div>
                <div className={styles.nextBtn}>
                    <ButtonNext className={styles.customButton}><KeyboardArrowRightIcon /></ButtonNext>
                </div>
            </div>
        </CarouselProvider>
    )
}

export default Carousel;