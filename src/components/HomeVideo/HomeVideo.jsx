import React, { useState, useEffect } from 'react';
import Headers from '../../components/Headers/Headers';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper';
import "swiper/css/navigation";
import 'swiper/css';
import ReactPlayer from 'react-player';
import Footer from '../../components/Footer/Footer';


const HomeVideo = ({ item }) => {
    console.log('homevideo', item);

    return (
        <>
            <div className='card  mb-4'>
                <div className="card" style={{height:"350px !important"}}>
                    <div className="cardImg_container">
                        <ReactPlayer
                            width="500px" height="220px"
                            controls url={item.video_link} />
                    </div>
                    <div className="card_body">
                        <h2 className="card_text">{item.title}</h2>
                        <p className="card_para">{item.subtitle}</p>
                        <span className="card_desc" dangerouslySetInnerHTML={{__html:item.Description.slice(0,60)}}></span>
                    </div>
                    {/* <div className="card_btnConainer">
                        <Link to={`/single-news/${news.id}`}>
                            <button className='card_btn'>
                                <span className="cardbtn_text">
                                    FIND OUT MORE
                                </span>
                            </button>
                        </Link>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default HomeVideo




    // < div className = "fgirls" >
    //     <div className="fgcategory">
    //         <div className="container">
    //             <div className="d-flex justify-content-between align-items-center mt-4">
    //                 <h4 className="fw-bolder">GET INSPIRED</h4>
    //                 <span className="fw-bold fgcLeft_all">SEE ALL</span>
    //             </div>
    //             <div className=" fg mt-4">
    //                 <div className="fgSLiders">
    //                     <Swiper
    //                         modules={[Navigation, Thumbs]}
    //                         loop={true}
    //                         spaceBetween={10}
    //                         navigation={true}
    //                         grabCursor={true}
    //                         className="swiper-slide"
    //                         breakpoints={{
    //                             0: {
    //                                 slidesPerView: 1,
    //                                 spaceBetween: 10
    //                             },
    //                             468: {
    //                                 slidesPerView: 2,
    //                                 spaceBetween: 10
    //                             },
    //                             768: {
    //                                 slidesPerView: 4,
    //                                 spaceBetween: 10
    //                             },
    //                         }}
    //                     >

    //                         <SwiperSlide>
    //                             <Link to={`/single-story/${item.id}`} className="link">

    //                                 <div className="fgCard_contianer rounded bg-success border-light border">
    //                                     <div className="card" style={{ width: '20rem' }}>
    //                                         <div className="fgImgOritem_container d-flex justify-content-center align-items-center">
    //                                             <ReactPlayer
    //                                                 width="500px" height="250px"
    //                                                 controls url={item.video_link}
    //                                             />
    //                                         </div>
    //                                         <div className="px-2 py-2">
    //                                             <h4 className="card-title fw-bold">{item.title}</h4>
    //                                             <p className="fgCard_text">{item.Description.slice(0, 20)}</p>

    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </Link>
    //                         </SwiperSlide>
    //                     </Swiper>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //         </ >