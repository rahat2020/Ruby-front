import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Headers from '../../components/Headers/Headers';
import m from '../../assets/manchester.jpg';
import ab from '../../assets/Logo-01.png';
import './Teams.css';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TeamsNav from './TeamsNav';
import SingleOverview from './SingleOverview/SingleOverview';

const Teams = () => {

    const [data, setData] = useState([])
    console.log('data', data)

    useEffect(() => {
        const newsData = async () => {
            const data = new FormData();
            data.append('Process', "see_all_team");
            const res = await axios.post('https://api.wslbangladesh.com/Team/find_all_team/', data);
            console.log(res.data);
            setData(res.data);
        }
        newsData()
    }, [])

    // const handleAlert = (data) => {
    //     Swal.fire({
    //         icon: 'info',
    //         title: 'Tickets is not available',
    //     })
    // }
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    }, [])


    return (
        <>
            <Headers />
            {/* <TeamsNav /> */}
            <div className="container">
                <div className="tickets">
                    <div className="row">

                        {
                            data.map((item, i) => (
                                <div className="col-md-3" key={i}>
                                    <div className="card temCard shadow-sm" >
                                        <div className="tmImgContainer">
                                            <div className="tmImgwrap">
                                                <div className="d-flex justify-content-center align-tiems-center imgscndcon">
                                                    <img src={`https://api.wslbangladesh.com` + item.Team_Logo} className="tmgCardImg" alt="..." />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="temcard_body">
                                            <h4 className="temTitle">{item.Team_Name}</h4>
                                            <button className='Tckt_btn'>
                                                <Link to={`/all_teams/single_team/${item.id}`} className='link'>
                                                    <span className="Allcardbtn_text">
                                                        SEE MORE
                                                    </span>
                                                </Link>
                                            </button>
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

export default Teams