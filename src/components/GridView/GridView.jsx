import React, { useState, useEffect } from 'react'
import Card from '../Card/Card'
import './GridView.css';
import axios from 'axios';

const GridView = (props) => {
  // FETCH DATA FROM DATABASE
  const [data, setData] = useState([])
  // console.log('data', data)

  useEffect(() => {
    const newsData = async () => {
      const data = new FormData();
      data.append('Process', "see_all_news");
      // console.log('Process', data.append('Process', "see_all_news"));
      const res = await axios.post('https://h.amaderbazar-bd.com/news/find_all_news/', data);
      // console.log(res.data);
      setData(res.data);
    }
    newsData()
  }, [])
  return (
    <div className='container wsl_margin_component'>
      <div className="row">
        {
          data.map((news, index) => (
            <div className="col-md-4" key={index}>
              <Card news={news} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default GridView