import React from "react";
// import banner_svg from '../../assets/SVG For Hero Banner.svg';
import './Carousel.css';
import caro_one from '../../assets/caro_one.jpg';
import caro_two from '../../assets/caro_two.jpg';
import caro_third from '../../assets/caro_third.jpg';
import banner from '../../assets/banner.svg';

const Carousel = (props) => {
    return (
        <div className="card_caro">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active caro_bannerContainer">
                        <img src={caro_one} className="d-block w-100 slide_one" alt="..." />
                        <img src={banner} alt="banner" className="banner_svg" />
                        <span className="banner_text">WHERE TO WATCH THE BWSL AND BWC!</span>
                        <div className="mblBannerBox">
                            <span className="banner_mblText">
                                WHERE TO WATCH THE BWSL AND BWC!
                            </span>
                            <button className='caru_btn'>
                                    READ MORE
                            </button>
                        </div>
                    </div>
                    <div className="carousel-item caro_bannerContainer">
                        <img src={caro_two} className="d-block w-100 slide_one" alt="..." />
                        <img src={banner} alt="banner" className="banner_svg" />
                           <div className="mblBannerBox">
                            <span className="banner_mblText">
                                WHERE TO WATCH THE BWSL AND BWC!
                            </span>
                            <button className='caru_btn'>
                                    READ MORE
                            </button>
                        </div>
                    </div>
                    <div className="carousel-item caro_bannerContainer">
                        <img src={caro_third} className="d-block w-100 slide_one" alt="..." />
                        <img src={banner} alt="banner" className="banner_svg" />
                           <div className="mblBannerBox">
                            <span className="banner_mblText">
                                WHERE TO WATCH THE BWSL AND BWC!
                            </span>
                            <button className='caru_btn'>
                                    READ MORE
                            </button>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;
