import React, { useState, useEffect } from 'react';
import Headers from '../../components/Headers/Headers';
import './News.css';
import news from '../../assets/caro_one.jpg'
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NewsTab from './NewsTab/NewsTab';

const News = () => {
    // FETCH DATA FROM DATABASE
    const [data, setData] = useState([])
    // console.log('data', data)

    useEffect(() => {
        const newsData = async () => {
            const data = new FormData();
            data.append('Process', "see_all_news");
            // console.log('Process', data.append('Process', "see_all_news"));
            const res = await axios.post('http://67.223.117.207:8000/news/find_all_news/', data);
            // console.log(res.data);
            setData(res.data);
        }
        newsData()
    }, [])
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    }, [])

    return (
        <>
            <Headers />
            <NewsTab/>
            <div className="container news">
                <div className='bg-white mb-4'>
                    <div className="row">


                        {
                            data.map((item, index) => (
                                <div className="col-md-4 mb-4" key={index}>
                                    <div className="card" >
                                        <div className="cardImg_container">
                                            <img src={`http://67.223.117.207:8000`+item.photo} className="card_img" alt="news-card-img" />
                                        </div>
                                        <div className="card_body">
                                            <h2 className="card_text">{item.title}</h2>
                                            <p className="card_para" dangerouslySetInnerHTML={{__html:item.Description.slice(0,60)}}></p>
                                        </div>
                                        <div className="card_btnConainer">
                                            <Link to={`/single-news/${item.id}`}>
                                                <button className='card_btn'>
                                                    <span className="cardbtn_text">
                                                        FIND OUT MORE
                                                    </span>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default News