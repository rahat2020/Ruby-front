import React, { useEffect, useState } from 'react';
import Headers from '../../../components/Headers/Headers';
import './SingleNews.css';
import ni from '../../../assets/newsimage.jpg';
import ci from '../../../assets/caro_one.jpg';
import ci2 from '../../../assets/caro_two.jpg';
import Footer from '../../../components/Footer/Footer';
import CheckFa from "../../../components/CheckFa/CheckFa";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
import CommonNav from '../../CommonNav/CommonNav';
import TopNavBar from '../../../components/topNavBar/TopNavBar';
import Topsubnav from '../../../components/Topsubnav/Topsubnav';

const SingleNews = () => {
    const { id } = useParams()
    // console.log(id)

    // FETCH SINGLE DATA WITH ID FROM DATABASE
    const [data, setData] = useState([])
    // console.log('data', data)

    useEffect(() => {
        const newsData = async () => {
            const data = new FormData();
            data.append('Process', "see_one_news");
            data.append('spacific_news_id', id);
            console.log('specific_news', data.append('spacific_news_id', id));
            const res = await axios.post('http://67.223.117.207:8000/news/find_all_news/', data);
            console.log(res.data);
            setData(res.data);
        }
        newsData()
    }, [])

    // FETCH TRENDING NEWS DATA
    const [tdata, setTData] = useState([])
    console.log('tdata', tdata)
    useEffect(() => {
        const newsData = async () => {
            const data = new FormData();
            data.append('Process', "see_all_news");
            console.log('Process', data.append('Process', "see_all_news"));
            const res = await axios.post('http://67.223.117.207:8000/news/find_all_news/', data);
            console.log(res.data);
            setTData(res.data);
        }
        newsData()
    }, [])

    const handleReload = () => {
        window.location.reload();
    }
    return (
        <>
            <Topsubnav/>
            <CommonNav />

            <div className="container mt-5 mb-5">
                <img src={`http://67.223.117.207:8000` + data.photo} alt="team-logo" style={{ width: '100%' }} />
                <h2 className='news-title'>{data.title}</h2>
                <h4 className='news-subtitle'>{data.subtitle ? data.subtitle : "It's the FA Women’s Continental Tyres League Cup Final"}</h4>

                <div className='article-body'>
                    <p dangerouslySetInnerHTML={{__html:data.Description}}></p>
                    {/* <p>It's the FA Women’s Continental Tyres League Cup Final on Sunday 5 March, as Arsenal meet Chelsea at Selhurst Park to challenge for the first silverware of the 2022-23 season.
                        Ahead of the game, we caught up with both coaches and a player from each team to get their thoughts on the occasion and the game.
                    </p>
                    <p>“Finals are the reason we play football – the stakes are high, but the rewards are great. At Arsenal, we have a long tradition of winning silverware and this represents an opportunity to add to that.

                        “Even though we prepare everything like we would for any other game, the week building up to a final feels different. There’s that extra edge of anticipation and the sense of occasion on the morning of the game. We know these matches mean more to our supporters and we take that responsibility very seriously.

                        “We face a very strong opponent in Chelsea. We saw how clinical they are in our FA Cup game last Sunday and though that result left us bitterly disappointed, the nature of football means there is always another game to play.

                        “We’re determined to bounce back strongly from that result and we come into this Final feeling ready and prepared. These games are decided by fine margins and our job is to make sure we come out on the right side of them.”
                    </p> */}

                </div>

                <div className='trending'>
                    <h2 className='news-title'>Trending</h2>
                    <div className='container'>
                        <div className='bg-white mb-5'>

                            <div className='row'>

                                {
                                    tdata.slice(0, 3).map((item, i) => (
                                        <div className='col-md-4' key={i}>
                                            <div className='card bg-white mb-4'>
                                                <div className="card">
                                                    <div className="cardImg_container">
                                                        <img src={`http://67.223.117.207:8000` + item.photo} className="card_img" alt="trending-news" />
                                                    </div>
                                                    <div className="card_body">
                                                        <h2 className="card_text">{item.title}</h2>
                                                        <p className="card_para">{item.Description.slice(0, 20)}</p>
                                                    </div>
                                                    <div className="card_btnConainer">
                                                        <Link to={`/single-news/${item.id}`} >
                                                            <button className='card_btn' onClick={handleReload}>
                                                                <span className="cardbtn_text">
                                                                    FIND OUT MORE
                                                                </span>
                                                            </button>
                                                        </Link>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <CheckFa />
            {/* <Footer /> */}
        </>
    )
}

export default SingleNews

