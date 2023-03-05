import React, { useState, useEffect } from 'react';
import Footer from '../../../components/Footer/Footer';
import Headers from '../../../components/Headers/Headers';
import ForgirlsNav from '../ForgirlsNav';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper';
import "swiper/css/navigation";
import 'swiper/css';
import ReactPlayer from 'react-player'
import axios from 'axios';

const PlaySomeTimes = () => {
  // FETCH DATA FROM DATABASE
  const [data, setData] = useState([])
  // console.log('forgirldata', data)

  const value = JSON.parse(localStorage.getItem('forgirlNav'))
  console.log('forgirldata', value)

  useEffect(() => {
    const newsData = async () => {
      const data = new FormData();
      data.append('Process', "find_with_category_FA");
      data.append('category_value', value);
      const res = await axios.post('https://h.earnvest.xyz/FA/find_all_FA/', data);
      console.log(res.data);
      setData(res.data);
    }
    newsData()
  }, [])

  return (
    <>
      <Headers />
      <ForgirlsNav />
      <div className="fgirls">

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
                  {
                    data.map((item, index) => (
                      <SwiperSlide key={index}>
                        <div className="fgCard_contianer rounded bg-success border-light border">
                          <div className="card" style={{ width: '20rem' }}>
                            {/* <img src="..." className="card-img-top" alt="..." /> */}
                            <div className="fgImgOrVideo_container d-flex justify-content-center align-items-center">
                              <ReactPlayer
                                width="500px" height="250px"
                                controls url={item.video_link}
                              />
                            </div>
                            <div className="px-2 py-2">
                              <h4 className="card-title fw-bold">{item.title}</h4>
                              <p className="fgCard_text">{item.Description.slice(0, 20)}</p>

                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))
                  }
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
                  {
                    data.map((item, index) => (
                      <SwiperSlide key={index}>
                        <div className="fgCard_contianer rounded bg-success border-light border">
                          <div className="card" style={{ width: '20rem' }}>
                            {/* <img src="..." className="card-img-top" alt="..." /> */}
                            <div className="fgImgOrVideo_container d-flex justify-content-center align-items-center">
                              <ReactPlayer
                                width="500px" height="250px"
                                controls url={item.video_link}
                              />
                            </div>
                            <div className="px-2 py-2">
                              <h4 className="card-title fw-bold">{item.title}</h4>
                              <p className="fgCard_text">{item.Description.slice(0, 20)}</p>

                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))
                  }
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PlaySomeTimes