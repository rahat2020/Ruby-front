import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Headers from '../../components/Headers/Headers';
import m from '../../assets/manchester.jpg';
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
            const res = await axios.post('https://h.amaderbazar-bd.com/Team/find_all_team/', data);
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

    return (
        <>
            <Headers />
            <TeamsNav/>
            <div className="container">
                <div className="tickets">
                    <div className="row">

                        {
                            data.map((item, i) => (
                                <div className="col-md-3 colamThree" key={i}>
                                    <div className="card tckt ">
                                        <div className="tcktImg_container ">
                                            <img src={`https://h.amaderbazar-bd.com` + item.Team_Logo} className=" tckt_tem_img" alt="team-logo" />
                                        </div>
                                        <div className="card_body tckt_body">
                                            <div className="tcard_text text-center fw-bold text-white fs-3">
                                                <p>{item.Team_Name}</p>
                                            </div>
                                            <div className="d-flex justify-content-center align-items-center">
                                                <button className='Tckt_btn'>
                                                    <Link to={`/all_teams/single_team/${item.id}`} className='link'>
                                                        <span className="cardbtn_text fw-bold text-dark">
                                                            SEE MORE
                                                        </span>
                                                    </Link>
                                                </button>
                                            </div>

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