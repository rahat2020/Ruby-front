import React, { useState, useEffect } from 'react'
import Card from '../Card/Card'
import './GridView.css';
import axios from 'axios';
import HomeVideo from '../HomeVideo/HomeVideo';
// import HomeVideo from '../HomeVideo/HomeVideo';

const GridView = () => {
  // FETCH NEWS DATA FROM DATABASE
  const [data, setData] = useState([])
  // console.log('data', data)

  useEffect(() => {
    const newsData = async () => {
      const data = new FormData();
      data.append('Process', "see_all_news");
      const res = await axios.post('https://api.wslbangladesh.com/news/find_all_news/', data);
      // console.log(res.data);
      setData(res.data);
    }
    newsData()
  }, [])

  // FETCH VIDEO DATA FROM DATABASE
  const [videoData, setVideoData] = useState([])
  console.log('videoData', data)

  useEffect(() => {
    const videData = async () => {
      const data = new FormData();
      data.append('Process', "see_all_FA");
      const res = await axios.post('https://api.wslbangladesh.com/FA/find_all_FA/', data);
      setVideoData(res.data);
    }
    videData()
  }, [])

  return (
    <div className='container wsl_margin_component'>
      <div className="row">
        <div className="border-bottom border-light border-2 mb-4">
          <h4 className="text-uppercase fw-bold" style={{ color: '#011E41' }}>latest News</h4>
        </div>
        {
          data.slice(0,3).map((news, index) => (

            <div className="col-md-4" key={index}>
              <Card news={news} />
            </div>
          ))
        }
      </div>
      <div className="vdo">
        <div className="border-bottom border-light border-2 mb-4">
          <h4 className="text-uppercase fw-bold" style={{ color: '#011E41' }}>latest videos</h4>
        </div>
        <div className="row">
          {
            videoData.slice(0, 3).map((item, index) => (
              <div className="col-md-4" key={index} >
                <HomeVideo item={item} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default GridView