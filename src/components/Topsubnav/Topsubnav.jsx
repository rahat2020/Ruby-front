import React, { useState, useEffect } from 'react';
import './Topsubnav.css';
import image from '../../assets/logo.png';
import verses from '../../assets/verse.png';
import livegme from '../../assets/liveGme.jpg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Topsubnav = () => {
    const [data, setData] = useState([])
    // console.log('viewEventdata', data[0])

    useEffect(() => {
        const newsData = async () => {
            const data = new FormData();
            data.append('Process', "see");
            // console.log('Process', data.append('Process', "see"));
            const res = await axios.post('https://h.amaderbazar-bd.com/Event/find_all/', data);
            // console.log(res.data);
            setData(res.data);
        }
        newsData()
    }, [])

    return (
        <div className="sticky-top topsubN">
            <div className="container">
                <div className="row topsubnav">
                    <div className="col-md-6">
                        <div className="topsubLeft_imgContainer">
                            <Link to="/">
                                <img src={image} alt="" className="topsubimg" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        {
                            data.slice(0, 1).map((item, i) => (
                                <Link to="/fixtures-results" className="link" key={i}>
                                    <div className="topsRight" key={i}>
                                        <div className="topsubLeftimg">
                                            <img src={livegme} alt="live-game-img" className='topsubProPic' />
                                        </div>
                                        <div className="topsubRight">
                                            <span className="topsubGmeTime">{item.Event_Date_Time}</span>
                                            {/* <span className="topsubGmeTime">NEXT GAME 2023-3-3 03:00 PM</span> */}
                                            <p className='topTeamsNames'>
                                                <span className="fw-bold">{item.Home_Team}</span>
                                                <span className='topsubVerses'>
                                                    <img src={verses} alt="" className='topsubVerses_img' />
                                                </span>
                                                <span className='fw-bold'>{item.Way_Team}</span>
                                            </p>
                                        </div>
                                        <div className="topsubProfile">
                                            <AccountCircleIcon className='topsubProPic' />
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topsubnav