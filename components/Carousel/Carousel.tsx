import React from 'react'
import styles from './index.module.css'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { SellercardDesktop } from '../Cards/SellercardDesktop';
import { SellercardMobile } from '../Cards/SellercardMobile';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';



export const Carousel = () => {
    return (
        <CarouselProvider
            className={styles.carousel}
            naturalSlideWidth={180}
            naturalSlideHeight={200}
            isIntrinsicHeight={true}
            totalSlides={3}
        >
            <Slider className={styles.slider}>
                <Slide
                    className={styles.slide}
                    index={0}
                    style={{ width: '180px', height: '200px', margin: '0rem 1rem 0rem 1rem' }}>
                    <SellercardDesktop/>
                </Slide>
                <Slide
                    className={styles.slide}
                    index={1}
                    style={{ width: '180px', height: '200px', margin: '0rem 1rem 0rem 1rem' }}>
                    <SellercardDesktop/>
                </Slide>
                <Slide
                    className={styles.slide}
                    index={2}
                    style={{ width: '180px', height: '200px', margin: '0rem 1rem 0rem 1rem' }}>
                    <SellercardDesktop/>
                </Slide>
                <Slide
                    className={styles.slide}
                    index={3}
                    style={{ width: '180px', height: '200px', margin: '0rem 1rem 0rem 1rem' }}>
                    <SellercardDesktop/>
                </Slide>
                <Slide
                    className={styles.slide}
                    index={4}
                    style={{ width: '180px', height: '200px', margin: '0rem 1rem 0rem 1rem' }}>
                    <SellercardDesktop/>
                </Slide>
                <Slide
                    className={styles.slide}
                    index={5}
                    style={{ width: '180px', height: '200px', margin: '0rem 1rem 0rem 1rem' }}>
                    <SellercardDesktop/>
                </Slide>
                <Slide
                    className={styles.slide}
                    index={6}
                    style={{ width: '180px', height: '200px', margin: '0rem 1rem 0rem 1rem' }}>
                    <SellercardDesktop/>
                </Slide>
                <Slide
                    className={styles.slide}
                    index={7}
                    style={{ width: '180px', height: '200px', margin: '0rem 1rem 0rem 1rem' }}>
                    <SellercardDesktop/>
                </Slide>
            </Slider>

            <Slider className={styles.mobile_slider}>
                <Slide
                    className={styles.m_slide}
                    index={0}
                    style={{ width: '130px', height: '165px', margin: '0rem .7rem 0rem .7rem' }}>
                    <SellercardMobile/>
                </Slide>
                <Slide
                    className={styles.m_slide}
                    index={1}
                    style={{ width: '130px', height: '165px', margin: '0rem .7rem 0rem .7rem' }}>
                    <SellercardMobile/>
                </Slide>
                <Slide
                    className={styles.m_slide}
                    index={2}
                    style={{ width: '130px', height: '165px', margin: '0rem .7rem 0rem .7rem' }}>
                    <SellercardMobile/>
                </Slide>
                <Slide
                    className={styles.m_slide}
                    index={3}
                    style={{ width: '130px', height: '165px', margin: '0rem .7rem 0rem .7rem' }}>
                    <SellercardMobile/>
                </Slide>
                <Slide
                    className={styles.m_slide}
                    index={4}
                    style={{ width: '130px', height: '165px', margin: '0rem .7rem 0rem .7rem' }}>
                    <SellercardMobile/>
                </Slide>
                <Slide
                    className={styles.m_slide}
                    index={5}
                    style={{ width: '130px', height: '165px', margin: '0rem .7rem 0rem .7rem' }}>
                    <SellercardMobile/>
                </Slide>
                <Slide
                    className={styles.m_slide}
                    index={6}
                    style={{ width: '130px', height: '165px', margin: '0rem .7rem 0rem .7rem' }}>
                    <SellercardMobile/>
                </Slide>
                <Slide
                    className={styles.m_slide}
                    index={7}
                    style={{ width: '130px', height: '165px', margin: '0rem .7rem 0rem .7rem' }}>
                    <SellercardMobile/>
                </Slide>
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


