import React from 'react';
import Headers from '../../components/Headers/Headers';
import './ForGirls.css';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper';
import "swiper/css/navigation";
import 'swiper/css';
import ReactPlayer from 'react-player'

const ForGirls = () => {
    return (
        <>
            <Headers />
            <div className="fgirls">
                <div className="fg_nav">
                    <div className="container">
                        {/* <div className="fg_navWrapper"> */}
                        <div className="row">
                            <div className="col-lg-12 fgnavs">
                                <ul className='fg_ul'>
                                    <Link to="/" className="link">
                                        <li className="fgul_lis first_item">
                                            NEVER PLAYED
                                        </li>
                                    </Link>
                                    <Link to="/" className="link">
                                        <li className="fgul_lis">PLAY SOMETIMES</li>
                                    </Link>
                                    <Link to="/" className="link">
                                        <li className="fgul_lis">PLAY A LOT</li>
                                    </Link>
                                    <Link to="/" className="link">
                                        <li className="fgul_lis">WILDCATS</li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
                <div className="fgcategory">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center mt-4">
                            <h4 className="fw-bolder">GET INSPIRED</h4>
                            <span className="fw-bold fgcLeft_all">SEE ALL</span>
                        </div>
                        <div className=" fg mt-4">
                            <div className="fgSLiders">
                                <Swiper
                                    modules={[Navigation, Thumbs]}
                                    loop={true}
                                    spaceBetween={10}
                                    navigation={true}
                                    grabCursor={true}
                                    className="swiper-slide"
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                            spaceBetween: 10
                                        },
                                        468: {
                                            slidesPerView: 2,
                                            spaceBetween: 10
                                        },
                                        768: {
                                            slidesPerView: 4,
                                            spaceBetween: 10
                                        },
                                    }}
                                >
                                    <SwiperSlide>
                                        <div className="fgCard_contianer rounded bg-success border-light border">
                                            <div className="card" style={{ width: '20rem' }}>
                                                {/* <img src="..." className="card-img-top" alt="..." /> */}
                                                <div className="fgImgOrVideo_container d-flex justify-content-center align-items-center">
                                                    <ReactPlayer width="500px" height="250px" controls progressInterval url="https://www.youtube.com/watch?v=rpqZ52lB6kY" />
                                                </div>
                                                <div className="px-2 py-2">
                                                    <h4 className="card-title fw-bold">Fun, friends and football</h4>
                                                    <p className="fgCard_text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="fgCard_contianer rounded bg-success border-light border">
                                            <div className="card" style={{ width: '20rem' }}>
                                                {/* <img src="..." className="card-img-top" alt="..." /> */}
                                                <div className="fgImgOrVideo_container d-flex justify-content-center align-items-center">
                                                    <ReactPlayer width="500px" height="250px" controls progressInterval url="https://www.youtube.com/watch?v=rpqZ52lB6kY" />
                                                </div>
                                                <div className="px-2 py-2">
                                                    <h4 className="card-title fw-bold">Fun, friends and football</h4>
                                                    <p className="fgCard_text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="fgCard_contianer rounded bg-success border-light border">
                                            <div className="card" style={{ width: '20rem' }}>
                                                {/* <img src="..." className="card-img-top" alt="..." /> */}
                                                <div className="fgImgOrVideo_container d-flex justify-content-center align-items-center">
                                                    <ReactPlayer width="500px" height="250px" controls progressInterval url="https://www.youtube.com/watch?v=rpqZ52lB6kY" />
                                                </div>
                                                <div className="px-2 py-2">
                                                    <h4 className="card-title fw-bold">Fun, friends and football</h4>
                                                    <p className="fgCard_text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="fgCard_contianer rounded bg-success border-light border">
                                            <div className="card" style={{ width: '20rem' }}>
                                                {/* <img src="..." className="card-img-top" alt="..." /> */}
                                                <div className="fgImgOrVideo_container d-flex justify-content-center align-items-center">
                                                    <ReactPlayer width="500px" height="250px" controls progressInterval url="https://www.youtube.com/watch?v=rpqZ52lB6kY" />
                                                </div>
                                                <div className="px-2 py-2">
                                                    <h4 className="card-title fw-bold">Fun, friends and football</h4>
                                                    <p className="fgCard_text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fgcategory">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center mt-4">
                            <h4 className="fw-bolder">FOOTBALL STORIES</h4>
                            <span className="fw-bold fgcLeft_all">SEE ALL</span>
                        </div>
                        <div className=" fg mt-4">
                            <div className="fgSLiders">
                             
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForGirls