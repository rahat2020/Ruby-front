import React, { useState } from "react";
import Carousel from '../Carousel/Carousel'
import StickyNavBar from '../StickyNavBar/StickyNavBar'
import TopNavBar from '../topNavBar/TopNavBar'
import Topsubnav from '../Topsubnav/Topsubnav'

const Headers = () => {
    const slides = [
        {
            url: "https://images.unsplash.com/photo-1532302989460-30bddf2bfda7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        },
        {
            url: "https://images.unsplash.com/photo-1526841195409-9e243ab8a772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80",
        },
    ];
    const newsList = [
        { url: 'https://images.unsplash.com/photo-1525436519918-5671ec6c6b50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1298&q=80' },
        { url: 'https://images.unsplash.com/photo-1542852869-ecc293ff89c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' },
        { url: 'https://images.unsplash.com/photo-1535506349729-56e253fac2b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1296&q=80' },
        { url: 'https://images.unsplash.com/photo-1526841234980-b3c3645c92a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1346&q=80' }
    ]
    const [currentIndex, setCurrentIndex] = useState(0);
    const handlePrevSlideClick = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const handleNextSlideClick = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    return (
        <>
            <TopNavBar />
            <Topsubnav />
            <Carousel
                index={currentIndex}
                handleNextClick={handleNextSlideClick}
                handlePrevClick={handlePrevSlideClick}
                slides={slides}
            />
            <StickyNavBar />
        </>
    )
}

export default Headers