import React from 'react';
import Headers from '../../../components/Headers/Headers';
import './SingleNews.css';
import ni from '../../../assets/newsimage.jpg';
import ci from '../../../assets/caro_one.jpg';
import ci2 from '../../../assets/caro_two.jpg';
import Footer from '../../../components/Footer/Footer';
import CheckFa from "../../../components/CheckFa/CheckFa";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const SingleNews = () => {
    return (
        <>
            <Headers />
            <div className="container mt-5 mb-5">
                <img src={ni} alt="team-logo" style={{ width: '100%' }} />
                <h2 className='news-title'>Bangladesh Vs Nepal : An Insight To What Happened</h2>
                <h4 className='news-subtitle'>Netherlands outruns Bangladesh in goal marathon.</h4>

                <div className='article-body'>
                    <p>It's the FA Women’s Continental Tyres League Cup Final on Sunday 5 March, as Arsenal meet Chelsea at Selhurst Park to challenge for the first silverware of the 2022-23 season.
                        Ahead of the game, we caught up with both coaches and a player from each team to get their thoughts on the occasion and the game.
                    </p>
                    <p>“Finals are the reason we play football – the stakes are high, but the rewards are great. At Arsenal, we have a long tradition of winning silverware and this represents an opportunity to add to that.

                        “Even though we prepare everything like we would for any other game, the week building up to a final feels different. There’s that extra edge of anticipation and the sense of occasion on the morning of the game. We know these matches mean more to our supporters and we take that responsibility very seriously.

                        “We face a very strong opponent in Chelsea. We saw how clinical they are in our FA Cup game last Sunday and though that result left us bitterly disappointed, the nature of football means there is always another game to play.

                        “We’re determined to bounce back strongly from that result and we come into this Final feeling ready and prepared. These games are decided by fine margins and our job is to make sure we come out on the right side of them.”
                    </p>
                </div>

                <div className='trending'>
                    <h2 className='news-title'>Trending</h2>
                    <div className='container'>
                        <div className='bg-white mb-5'>


                            <div className='row'>
                                <div className='col-md-4'>
                                    <div className='card bg-white mb-4'>
                                        <div className="card">
                                            <div className="cardImg_container">
                                                <img src={ci} className="card_img" alt="..." />
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
                                </div>

                                <div className='col-md-4'>
                                    <div className='card bg-white mb-4'>
                                        <div className="card">
                                            <div className="cardImg_container">
                                                <img src={ni} className="card_img" alt="..." />
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
                                </div>

                                <div className='col-md-4'>
                                    <div className='card bg-white mb-4'>
                                        <div className="card">
                                            <div className="cardImg_container">
                                                <img src={ni} className="card_img" alt="..." />
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
                                </div>

                            </div>

                        </div>
                    </div>
                </div>


            </div>
            <CheckFa />
            <Footer />
        </>
    )
}

export default SingleNews

