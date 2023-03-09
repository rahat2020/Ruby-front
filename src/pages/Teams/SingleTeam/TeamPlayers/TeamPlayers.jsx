import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from '../../../../components/Footer/Footer'
import Headers from '../../../../components/Headers/Headers';
import wmn from '../../../../assets/wmn.jpg';
import SingleTeam from '../SingleTeam';

const TeamPlayers = () => {
    const { id } = useParams()
    // console.log(id)

    // FETCH SINGLE DATA WITH ID FROM DATABASE
    const [data, setData] = useState([])
    console.log('PlayersTeamdata', data)


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
            <SingleTeam />
            <div className="container">
                <div className="tickets">
                    <div className="row">

                        <div className="col-md-3 colamThree">
                            <div className="card tckt ">
                                <div className="tcktImg_container ">
                                    <img src={wmn} className=" tckt_tem_img" alt="team-logo" />
                                </div>
                                <div className="card_body tckt_body">
                                    <div className="tcard_text text-center fw-bold text-white fs-3">
                                        <p>{data.Team_player_1_id_from_Plyer_model}</p>
                                    </div>
                                    <button className='Tckt_btn'>
                                        <Link to="/" className='link'>
                                            <span className="cardbtn_text fw-bold text-dark">
                                                VIEW DETAILS
                                            </span>
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 colamThree">
                            <div className="card tckt ">
                                <div className="tcktImg_container ">
                                    <img src={wmn} className=" tckt_tem_img" alt="team-logo" />
                                </div>
                                <div className="card_body tckt_body">
                                    <div className="tcard_text text-center fw-bold text-white fs-3">
                                        <p>{data.Team_player_1_id_from_Plyer_model}</p>
                                    </div>
                                    <button className='Tckt_btn'>
                                        <Link to="/" className='link'>
                                            <span className="cardbtn_text fw-bold text-dark">
                                                VIEW DETAILS
                                            </span>
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 colamThree">
                            <div className="card tckt ">
                                <div className="tcktImg_container ">
                                    <img src={wmn} className=" tckt_tem_img" alt="team-logo" />
                                </div>
                                <div className="card_body tckt_body">
                                    <div className="tcard_text text-center fw-bold text-white fs-3">
                                        <p>{data.Team_player_1_id_from_Plyer_model}</p>
                                    </div>
                                    <button className='Tckt_btn'>
                                        <Link to="/" className='link'>
                                            <span className="cardbtn_text fw-bold text-dark">
                                                VIEW DETAILS
                                            </span>
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 colamThree">
                            <div className="card tckt ">
                                <div className="tcktImg_container ">
                                    <img src={wmn} className=" tckt_tem_img" alt="team-logo" />
                                </div>
                                <div className="card_body tckt_body">
                                    <div className="tcard_text text-center fw-bold text-white fs-3">
                                        <p>{data.Team_player_1_id_from_Plyer_model}</p>
                                    </div>
                                    <button className='Tckt_btn'>
                                        <Link to="/" className='link'>
                                            <span className="cardbtn_text fw-bold text-dark">
                                                VIEW DETAILS
                                            </span>
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}

export default TeamPlayers