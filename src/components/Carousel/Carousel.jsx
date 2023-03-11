import React, { useState, useEffect } from "react";
// import banner_svg from '../../assets/SVG For Hero Banner.svg';
import './Carousel.css';
import caro_one from '../../assets/caro_one.jpg';
import caro_two from '../../assets/caro_two.jpg';
import caro_third from '../../assets/caro_third.jpg';
import banner from '../../assets/banner.svg';
import axios from 'axios';
import { Link } from "react-router-dom";

const Carousel = () => {

    // FETCH DATA FROM DATABASE
    const [data, setData] = useState([])
    console.log('sliders', data)

    useEffect(() => {
        const newsData = async () => {
            const data = new FormData();
            data.append('Process', "see_slide");
            // console.log('Process', data.append('Process', "see_slide"));
            const res = await axios.post('http://67.223.117.207:8000/Slide_Image_Logo/find_all_Slide_logo/', data);
            // console.log(res.data);
            setData(res.data);
        }
        newsData()
    }, [])

    return (
        <div className="card_caro">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {data.map((item, index) => (
                        <button key={index} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index}
                            className={index === 0 ? 'active' : ''} aria-current={index === 0 ? 'true' : 'false'} aria-label={`Slide ${index + 1}`}
                            style={{ backgroundColor: '#011e4100' }}
                        ></button>
                    ))}
                </div>
                <div className="carousel-inner">
                    {data.map((item, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} id="caro_bannerContainer">
                            {/* <img src={caro_two} className="d-block w-100 slide_one" alt="..." /> */}
                            <img src={`http://67.223.117.207:8000` + item.Slide_Image} className="d-block w-100 slide_one" alt="..." />
                            <img src={banner} alt="banner" className="banner_svg" />
                            <span className="banner_text">{item.Slide_title.slice(0, 25)}</span>
                            <Link to="/fixtures-results" className="link">
                                <button className='caruWeb_btn'>
                                    READ MORE
                                </button>
                            </Link>
                            {/* <div className="caruwebBox"></div> */}
                            <div className="mblBannerBox">
                                <span className="banner_mblText text-uppercase">
                                    {item.Slide_title.slice(0, 25)}
                                </span>
                                <Link to="/fixtures-results">
                                    <button className='caru_btn'>
                                        READ MORE
                                    </button>
                                </Link>

                            </div>
                            {/* <img src={`http://67.223.117.207:8000`+item.Slide_Image} className="d-block w-100" alt="" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>{item.Slide_title}</h5>
                            </div> */}
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;


{/* <div className="card_caro">
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
</div>  */}