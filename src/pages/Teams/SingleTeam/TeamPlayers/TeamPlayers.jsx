import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from '../../../../components/Footer/Footer'
import Headers from '../../../../components/Headers/Headers';
import wmn from '../../../../assets/wmn.jpg';
import SingleTeam from '../SingleTeam';
import './TeamPlayers.css';

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
            const res = await axios.post('https://api.wslbangladesh.com/Team/find_team_with_id/', data);
            console.log(res.data);
            setData(res.data);
        }
        newsData()
    },)

    return (
        <>
            <SingleTeam />
            <div className="container">
                <div className="tickets">
                    <div className="row">

                        <div className="col-md-3 colamThree">
                            <div className="card tckt shadow-sm">
                                <div className="tcktImg_container ">
                                    <div className="imgWrpa">
                                        <img src={wmn} className=" tckt_tem_img" alt="team-logo" />
                                    </div>
                                </div>
                                <div className="card_body tckt_body">
                                    <div className="text-center fw-bold fs-3">
                                        <p className="tpname">{data.Team_player_1_id_from_Plyer_model ? data.Team_player_1_id_from_Plyer_model : 'No Name'}</p>
                                    </div>
                                    <div className="pldetails d-flex justify-content-center align-items-center ">
                                        <div className="pldLeft">
                                            <p className="tpname">Positions: LB</p>
                                            <p className="tpname">Player Age: 25</p>
                                        </div>
                                        <div className="pldRight ms-2">
                                            <p className="tpname">Base Price: LB</p>
                                            <p className="tpname">Sell Price: 25</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 colamThree">
                            <div className="card tckt shadow-sm">
                                <div className="tcktImg_container ">
                                    <div className="imgWrpa">
                                        <img src={wmn} className=" tckt_tem_img" alt="team-logo" />
                                    </div>
                                </div>
                                <div className="card_body tckt_body">
                                    <div className="text-center fw-bold fs-3">
                                        <p className="tpname">{data.Team_player_1_id_from_Plyer_model ? data.Team_player_1_id_from_Plyer_model : 'No Name'}</p>
                                    </div>
                                    <div className="pldetails d-flex justify-content-center align-items-center ">
                                        <div className="pldLeft">
                                            <p className="tpname">Positions: LB</p>
                                            <p className="tpname">Player Age: 25</p>
                                        </div>
                                        <div className="pldRight ms-2">
                                            <p className="tpname">Base Price: LB</p>
                                            <p className="tpname">Sell Price: 25</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 colamThree">
                            <div className="card tckt shadow-sm">
                                <div className="tcktImg_container ">
                                    <div className="imgWrpa">
                                        <img src={wmn} className=" tckt_tem_img" alt="team-logo" />
                                    </div>
                                </div>
                                <div className="card_body tckt_body">
                                    <div className="text-center fw-bold fs-3">
                                        <p className="tpname">{data.Team_player_1_id_from_Plyer_model ? data.Team_player_1_id_from_Plyer_model : 'No Name'}</p>
                                    </div>
                                    <div className="pldetails d-flex justify-content-center align-items-center ">
                                        <div className="pldLeft">
                                            <p className="tpname">Positions: LB</p>
                                            <p className="tpname">Player Age: 25</p>
                                        </div>
                                        <div className="pldRight ms-2">
                                            <p className="tpname">Base Price: LB</p>
                                            <p className="tpname">Sell Price: 25</p>
                                        </div>
                                    </div>
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