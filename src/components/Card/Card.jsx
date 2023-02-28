import React from 'react';
import './Card.css';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Card = ({ news }) => {
  return (
    <div className='card bg-white mb-4'>
      <div className="card">
        <div className="cardImg_container">
          <img src={news.url} className="card_img" alt="..." />
        </div>
        <div className="card_body">
          <h2 className="card_text">FA WOMEN'S CONTINENTAL TYRES LEAGUE CUP FINAL 2023</h2>
          <p className="card_para">Heading to Sunday's FA Women's Continental Tyres Cup Final on Sunday? Find out all you need to know with our fan guide</p>
        </div>
        <div className="card_btnConainer">
          <button className='card_btn'>
            <span className="cardbtn_text">
            FIND OUT MORE
            </span>
          
              {/* <ArrowRightIcon className="card_arrowIcon" />
            <span className="card_iconContainer">
            </span> */}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card