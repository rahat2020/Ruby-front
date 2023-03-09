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

const SingleTeam = () => {
    const { id } = useParams()
    // console.log(id)

    // FETCH SINGLE DATA WITH ID FROM DATABASE
    const [data, setData] = useState([])
    console.log('singleTeamdata', data)


    useEffect(() => {
        const newsData = async () => {
            const data = new FormData();
            data.append('Process', "find_team_with_id");
            data.append('specific_id', id);
            const res = await axios.post('https://h.amaderbazar-bd.com/Team/find_team_with_id/', data);
            console.log(res.data);
            setData(res.data);
        }
        newsData()
    }, [])

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
                        <img src={`https://h.amaderbazar-bd.com` + data.Team_banner ? ` https://h.amaderbazar-bd.com` + data.Team_banner : ban}
                            className="st_banner" />
                    </div> */}
                    <div className="st_data_box container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="st_logoContainer container">
                                    <img src={`https://h.amaderbazar-bd.com` + data.Team_Logo} alt="" className="st_logo" />
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
                        <Link to="/team_overview" className="link">
                            <button className="btn btn-light fw-bold">OVERVIEW</button>
                        </Link>
                        <Link to={`/single_team/players/${id}`} className="link stBtn">
                            <button className="btn btn-light fw-bold ">SQUAD</button>
                        </Link>
                        <Link to="/team_overview" className="link stBtn">
                            <button className="btn btn-light fw-bold ">SCHEDULE</button>
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
                </div>
            </div>
        </>
    )
}

export default SingleTeam