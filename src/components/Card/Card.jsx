import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import img from '../../assets/newFour.jpg';
// import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Card = ({ news }) => {
  // console.log('card_news', news);
  return (
    <div className='card bg-white mb-4'>
      <div className="card homeCard">
        <div className="cardImg_container">
          <div className="imgwrap">
            <img src={img} className="card_img" alt="..." />
          </div>
          {/* <img src={`https://api.wslbangladesh.com` + news.photo} className="card_img" alt="..." /> */}
        </div>
        <div className="card_body">
          <h2 className="card_text">{news.title}</h2>
          <p className="card_para">{news.subtitle}</p>
          <span className="card_desc" dangerouslySetInnerHTML={{ __html: news.Description.slice(0, 60) }}></span>
        </div>
        <div className="card_btnConainer">
          <Link to={`/single-news/${news.id}`}>
            <button className='card_btn'>
              <span className="cardbtn_text">
                FIND OUT MORE
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card