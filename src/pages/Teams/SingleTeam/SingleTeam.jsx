import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../../components/Footer/Footer';
import ban from '../../../assets/CSK.png';
import Headers from '../../../components/Headers/Headers';
import './SingleTeam.css';
import axios from 'axios';
import StickyNavBar from '../../../components/StickyNavBar/StickyNavBar';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Topsubnav from '../../../components/Topsubnav/Topsubnav';
import CommonNav from '../../CommonNav/CommonNav';
import ReactPlayer from 'react-player';


const SingleTeam = () => {
    const { id } = useParams()
    // console.log(id)

    // FETCH SINGLE DATA WITH ID FROM DATABASE
    const [data, setData] = useState([])
    // console.log('singleTeamdata', data)

    useEffect(() => {
        const newsData = async () => {
            const data = new FormData();
            data.append('Process', "find_team_with_id");
            data.append('specific_id', id);
            const res = await axios.post('https://api.wslbangladesh.com/Team/find_team_with_id/', data);
            // console.log(res.data);
            setData(res.data);
        }
        newsData()
    }, [])

    // FETCH VIDEO DATA FROM DATABASE
    const [videoData, setVideoData] = useState([])
    // console.log('videoData', data)

    useEffect(() => {
        const videData = async () => {
            const data = new FormData();
            data.append('Process', "see_all_FA");
            const res = await axios.post('https://api.wslbangladesh.com/FA/find_all_FA/', data);
            setVideoData(res.data);
        }
        videData()
    }, [])

    // will take to the top
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    }, [])
    // show player compo 
    const [playerShow, SetPlayerShow] = useState(false)
    console.log(playerShow)
    const handleClick = () => {
        SetPlayerShow(true)
    }
    // show shcedule compo
    // const [shceduleShow, SetShceduleShow] = useState(false)
    // const handleSchd = () => {
    //     SetShceduleShow(!false)
    // }

    return (
        <>
            <Topsubnav />
            <CommonNav />
            <div className="single_team">
                <div className="st_team">
                    <img src={ban}
                        className="st_banner"
                        alt="banner"
                        style={{ backgroundColor: "linear-gradient(180deg, #011e4177 0%, #3164f14f 100%" }}
                    />

                    {/* <div className="bgc">
                        <img src={`https://api.wslbangladesh.com` + data.Team_banner ? ` https://api.wslbangladesh.com` + data.Team_banner : ban}
                            className="st_banner" />
                    </div> */}
                    <div className="st_data_box container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="st_logoContainer container">
                                    <img src={`https://api.wslbangladesh.com` + data.Team_Logo} alt="" className="st_logo" />
                                </div>

                            </div>
                            <div className="col-md-6 stdTeamNameData">
                                <h2 className="text-dark fw-bold">{data.Team_Name}</h2>
                                <Link to={data.Team_Official_Link} className="link">
                                    <button className="btn btn-success fw-bold text-white">Official Team Site</button>
                                </Link>
                                {/* <div className="d-flex mx-3"> */}
                                <span className="ms-2">
                                    <Link to={data.Team_Official_Link} className="link">
                                        <FacebookIcon style={{ fontSize: '30px', color: '#fff' }} />
                                    </Link>
                                </span>
                                <span className="ms-2">
                                    <Link to={data.Team_Official_Link} className="link">
                                        <InstagramIcon style={{ fontSize: '30px', color: '#fff' }} />
                                    </Link>
                                </span>
                                <span className="ms-2">
                                    <Link to={data.TwitterIcon} className="link">
                                        <TwitterIcon style={{ fontSize: '30px', color: '#fff' }} />
                                    </Link>
                                </span>

                            </div>
                            <div className="stData container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p className=" stTeamText">Owner: {data.Team_Owner_Name}</p>
                                        <p className=" stTeamText">Team Manager: {data.Manager ? data.Manager : "Rahul shrama"}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className=" stTeamText">Captain: {data.Team_captain ? data.Team_captain : 'Rohit shrama'}</p>
                                        <p className=" stTeamText">Venue: Bangga Bandhu National Stadium</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="st_overViewWrap">
                    <div className="stOverItems">
                        <Link to={`/single_team/players/${id}`} className="link stBtn">
                            <button className="btn btn-light fw-bold " onClick={handleClick}>SQUAD</button>
                        </Link>
                        <Link to="/team_schedule/players/schedule" className="link stBtn">
                            <button className="btn btn-light fw-bold " onClick={handleSchd}>SCHEDULE</button>
                        </Link>
                        <Link to="/team_overview" className="link stBtn">
                            <button className="btn btn-light fw-bold ">RESULTS</button>
                        </Link>
                        <Link to="/team_overview" className="link stBtn">
                            <button className="btn btn-light fw-bold ">NEWS</button>
                        </Link>
                        <Link to="/team_overview" className="link stBtn">
                            <button className="btn btn-light fw-bold">ARCHIVE</button>
                        </Link>
                    </div>
                    {/* <SingleSchedule/> */}
                </div>

                {/* PLAYERS DATA */}
                {
                    playerShow ? " "
                        :
                        <div className="container">
                            <div className="row mt-5">
                                {
                                    videoData.slice(0, 3).map((item, i) => (
                                        <div className="col-md-4">
                                            <div className="d-flex" key={i}>
                                                <div className="container">
                                                    <div className='card  mb-4'>
                                                        <div className="card" style={{ height: "350px !important" }}>
                                                            <div className="cardImg_container">
                                                                <ReactPlayer
                                                                    width="500px" height="220px"
                                                                    controls url={item.video_link} />
                                                            </div>
                                                            <div className="card_body">
                                                                <h2 className="card_text">{item.title}</h2>
                                                                <p className="card_para">{item.subtitle}</p>
                                                                <span className="card_desc">{item.Description.slice(0, 60)}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    ))
                                }
                            </div>
                        </div>
                }
{/* 
                {
                    shceduleShow ? " "
                        :
                        <div className="container">
                            <div className="row mt-5">
                                {
                                    videoData.slice(0, 3).map((item, i) => (
                                        <div className="col-md-4">
                                            <div className="d-flex" key={i}>
                                                <div className="container">
                                                    <div className='card  mb-4'>
                                                        <div className="card" style={{ height: "350px !important" }}>
                                                            <div className="cardImg_container">
                                                                <ReactPlayer
                                                                    width="500px" height="220px"
                                                                    controls url={item.video_link} />
                                                            </div>
                                                            <div className="card_body">
                                                                <h2 className="card_text">{item.title}</h2>
                                                                <p className="card_para">{item.subtitle}</p>
                                                                <span className="card_desc">{item.Description.slice(0, 60)}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    ))
                                }
                            </div>
                        </div>
                }
 */}

            </div>
        </>
    )
}

export default SingleTeam