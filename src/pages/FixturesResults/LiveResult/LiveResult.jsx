import React, { useState, useEffect } from 'react';
import './LiveResult.css';
import man from '../../../assets/manchester.jpg';
import ball from '../../../assets/goal.svg';
import yc from '../../../assets/warning.svg';
import Headers from '../../../components/Headers/Headers';
import Footer from '../../../components/Footer/Footer';
import CheckFa from '../../../components/CheckFa/CheckFa';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactPlayer from 'react-player';

const LiveResult = () => {
    const { id } = useParams()
    // console.log(id)
    // FETCH DATA FROM DATABASE
    const [data, setData] = useState([])
    console.log(data)
    // console.log(data?.game_json_data_to_dict?.home_Team_player_1_id_from_Plyer_model)
    // console.log('data', data?.Goal_json_data_to_dict?.map(i => i.Goal_Date_Time))
    // console.log('data', data?.Goal_json_data_to_dict)
    // console.log('data', data?.Goal_json_data_to_dict?.map(i => Number(i.Home_Team_Goal_Count_In_1)))
    // console.log('data', data.game_json_data_to_dict)
    // console.log('resultsData', data?.Substituitons_json_data_to_dict)
    // console.log('resultsData', data?.game_json_data_to_dict?.Event_for_game)


    // const time = (data?.Goal_json_data_to_dict?.map(i => i? i.Goal_Date_Time :''))
    // const newTime = new Date(time)
    // const exactTime = newTime.toLocaleTimeString()
    // console.log('exactTime', exactTime)
    // FETCHING GOAL DETAILS

    const initialValue = 0;
    const homeTeamGoal = data?.Goal_json_data_to_dict?.map(i => Number(i.Home_Team_Goal_Count_In_1)).reduce(
        (accumulator, currentValue) => accumulator + currentValue, initialValue);
    // console.log('initialValue', homeTeamGoal)

    const awayValue = 0;
    const awayTeamGoal = data?.Goal_json_data_to_dict?.map(i => Number(i.Way_Team_Goal_Count_In_1)).reduce(
        (accumulator, currentValue) => accumulator + currentValue, awayValue);
    // console.log('initialValue', awayTeamGoal)
    // 
    // console.log('awayTeamGoal', awayTeamGoal)

    useEffect(() => {
        const newsData = async () => {
            const data = new FormData();
            data.append('Process', 'find_game_with_Event_id');
            data.append('Event_id', id);
            const res = await axios.post('https://api.wslbangladesh.com/Game/find_game_with_Event_id/', data);
            // console.log(res)
            setData(res.data);
        }
        newsData()
        // setTimeout(function () {
        //     window.location.reload();
        //   }, [5000])
    },)

    // fetching EVENT data FOR STADIUM NAME
    const [stadNmae, setstadNmae] = useState([])
    // console.log('stadNmae', stadNmae.Home_Team)

    useEffect(() => {
        const newsData = async () => {
            const data = new FormData();
            data.append('Process', 'see');
            data.append('id', id);
            const res = await axios.post('https://api.wslbangladesh.com/Event/find_individual_id/', data);
            // console.log(res)
            setstadNmae(res.data);
        }
        newsData()
    },)

    // FETCHING TEAM DETAILS
    const [homeTeamLogo, setHomeTeamLogo] = useState('')
    // console.log('homeTeamLogo', homeTeamLogo)

    useEffect(() => {
        const newsData = async () => {
            const data = new FormData();
            data.append('Process', 'find_team_with_team_name');
            data.append('team_name', stadNmae?.Home_Team);
            const res = await axios.post('https://api.wslbangladesh.com/Team/find_team_with_team_name/', data);
            // console.log(res)
            setHomeTeamLogo(res.data);
        }
        newsData()
    },)

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    }, [])

    return (
        <>
            <Headers />

            <div className='result-header'>
                <div className='result-date'>
                    <h5>3rd March, 8:00pm</h5>
                    <span>{stadNmae?.Stadium_Name}</span>
                </div>

                <div className="liveMtch">
                    <div className="MeadiaplayerContainer">
                        <ReactPlayer
                            className="videoPlay" 
                            controls url="https://www.youtube.com/watch?v=G-bLsrNHcpE&t=329s" />
                    </div>
                </div>

                <div className='container result-container'
                    style={{
                        paddingTop: '100px', maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto'
                    }}>
                    <div className='row responsive'>
                        <div className='col-md-5 result-card-right'>
                            <img src={`https://api.wslbangladesh.com` + homeTeamLogo?.Team_Logo} alt="" />
                            {/* <img src={man} alt="" /> */}
                            <h3>
                                {data?.game_json_data_to_dict?.home_Team_name}
                                <span>
                                    {/* {
                                        data?.Goal_json_data_to_dict?.map((item, i) => (
                                            item.Home_Team_Goal_Count_In_1
                                        ))
                                    } */}
                                    {homeTeamGoal}
                                </span>
                            </h3>

                        </div>

                        <div className='col-md-2 result-vs'>
                            <h3 className='text-white'>VS</h3>
                        </div>

                        <div className='col-md-5 result-card-left'>
                            <h3>
                                <span>
                                    {/* {
                                        data?.Goal_json_data_to_dict?.map((item, i) => (
                                            item.Way_Team_Goal_Count_In_1 ? item.Way_Team_Goal_Count_In_1 : '0'
                                        ))
                                    } */}
                                    {awayTeamGoal}
                                </span>
                                {data?.game_json_data_to_dict?.way_Team_name}
                            </h3>
                            {/* <img src={man} alt="" /> */}
                            <img src={`https://api.wslbangladesh.com` + homeTeamLogo?.Team_Logo} alt="" />
                        </div>

                    </div>

                    <div className='row result-below'>

                        <h4>FULLTIME</h4>
                        <button className="card_btn">WATCH HERE</button>

                    </div>

                </div>


            </div>

            <div className="container mb-5">
                <div className='moments'>
                    {/* <h2>
                        {
                            data?.Goal_json_data_to_dict?.map((item,i)=>(
                                item.Home_Team_Goal_Count_In_1
                            ))
                        }
                    </h2> */}

                    {/* <h2>
                        {
                            data?.Substituitons_json_data_to_dict?.map((item, i) => (
                                item.Substituitons_Name
                            ))
                        }
                    </h2>  */}
                    <h2>Moments Of The Game</h2>
                    <div className='row'>

                        <div className='col-xl-6 col-md-6 col-sm-6 col-6 team-left'>
                            <ul>
                                <li>
                                    <h4 style={{ fontWeight: '900' }}> <img src={ball} alt="" />
                                        {
                                            data?.Goal_json_data_to_dict?.map((item, i) =>
                                                item.Home_Team_Goal_Count_In_1 === null ? "" : <span>{item.Scorer_Name},</span>
                                            )
                                        }
                                        / {exactTime} min
                                    </h4>
                                </li>
                                <li>
                                    <h4 style={{ fontWeight: '900' }}> <img src={yc} alt="" />
                                        {/* {
                                            data?.Goal_json_data_to_dict?.map((item, i) =>(item.Scorer_Name))
                                        } */}
                                        / 40 min</h4>
                                </li>
                            </ul>
                        </div>

                        <div className='col-xl-6 col-md-6 col-sm-6 col-6 team-right'>
                            <ul>
                                <li>
                                    <h4 style={{ fontWeight: '900' }}>
                                        {
                                            data?.Goal_json_data_to_dict?.map((item, i) => (
                                                item.Way_Team_Goal_Count_In_1 === null ? "" : <span>{item.Scorer_Name},</span>
                                            ))
                                        } / 32 min  <img src={ball} alt="" />
                                    </h4>
                                </li>
                                <li>
                                    <h4 style={{ fontWeight: '900' }}>  TR Niloy / 40 min <img src={yc} alt="" /></h4>
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>

            </div>

            <div className="container mt-5 mb-5">
                <div className='lineup'>
                    <h2>Starting Line Up</h2>
                    <div className='row'>

                        <div className='col-xl-6 col-md-6 col-sm-6 col-6 team-left'>
                            <ul>
                                <li>
                                    <h4>
                                        {data?.game_json_data_to_dict?.home_Team_player_1_id_from_Plyer_model}
                                    </h4>
                                    <span>Goalkeeper</span>
                                </li>
                                <li>
                                    <h4>
                                        {data?.game_json_data_to_dict?.home_Team_player_2_id_from_Plyer_model}
                                    </h4>
                                    <span>Right Back</span>
                                </li>
                                <li>
                                    <h4>
                                        {data?.game_json_data_to_dict?.home_Team_player_3_id_from_Plyer_model}
                                    </h4>
                                    <span>Centre Back</span>
                                </li>
                                <li>
                                    <h4>
                                        {data?.game_json_data_to_dict?.home_Team_player_4_id_from_Plyer_model}
                                    </h4>
                                    <span>Centre Back</span>
                                </li>
                                <li>
                                    <h4>
                                        {data?.game_json_data_to_dict?.home_Team_player_5_id_from_Plyer_model}
                                    </h4>
                                    <span>Centre Back</span>
                                </li>
                                <li>
                                    <h4>
                                        {data?.game_json_data_to_dict?.home_Team_player_6_id_from_Plyer_model}
                                    </h4>
                                    <span>Centre Back</span>
                                </li>
                                <li>
                                    <h4>
                                        {data?.game_json_data_to_dict?.home_Team_player_7_id_from_Plyer_model}
                                    </h4>
                                    <span>Centre Back</span>
                                </li>
                                <li>
                                    <h4>
                                        {data?.game_json_data_to_dict?.home_Team_player_8_id_from_Plyer_model}
                                    </h4>
                                    <span>Centre Back</span>
                                </li>
                                <li>
                                    <h4>
                                        {data?.game_json_data_to_dict?.home_Team_player_9_id_from_Plyer_model}
                                    </h4>
                                    <span>Centre Back</span>
                                </li>
                                <li>
                                    <h4>
                                        {data?.game_json_data_to_dict?.home_Team_player_10_id_from_Plyer_model}
                                    </h4>
                                    <span>Centre Back</span>
                                </li>
                                <li>
                                    <h4>
                                        {data?.game_json_data_to_dict?.home_Team_player_11_id_from_Plyer_model}
                                    </h4>
                                    <span>Centre Back</span>
                                </li>
                            </ul>
                        </div>

                        <div className='col-xl-6 col-md-6 col-sm-6 col-6 team-right'>
                            <ul>
                                <li>
                                    <h4>
                                        {data?.game_json_data_to_dict?.way_Team_player_1_id_from_Plyer_model}
                                    </h4>
                                    <span>Goalkeeper</span>
                                </li>
                                <li>
                                    <h4>
                                        {data?.game_json_data_to_dict?.way_Team_player_2_id_from_Plyer_model}
                                    </h4>
                                    <span>Right Back</span>
                                </li>
                                <li>
                                    <h4>
                                        {data?.game_json_data_to_dict?.way_Team_player_3_id_from_Plyer_model}
                                    </h4>
                                    <span>Midfield</span>
                                </li>
                                <li>
                                    <h4>
                                        {data?.game_json_data_to_dict?.way_Team_player_4_id_from_Plyer_model}
                                    </h4>
                                    <span>Midfield</span>
                                </li>
                                <li>
                                    <h4>
                                        {data?.game_json_data_to_dict?.way_Team_player_5_id_from_Plyer_model}
                                    </h4>
                                    <span>Midfield</span>
                                </li>
                                <li>
                                    <h4>
                                        {data?.game_json_data_to_dict?.way_Team_player_6_id_from_Plyer_model}
                                    </h4>
                                    <span>Midfield</span>
                                </li>
                                <li>
                                    <h4>
                                        {data?.game_json_data_to_dict?.way_Team_player_7_id_from_Plyer_model}
                                    </h4>
                                    <span>Midfield</span>
                                </li>
                                <li>
                                    <h4>
                                        {data?.game_json_data_to_dict?.way_Team_player_8_id_from_Plyer_model}
                                    </h4>
                                    <span>Midfield</span>
                                </li>
                                <li>
                                    <h4>
                                        {data?.game_json_data_to_dict?.way_Team_player_9_id_from_Plyer_model}
                                    </h4>
                                    <span>Midfield</span>
                                </li>
                                <li>
                                    <h4>
                                        {data?.game_json_data_to_dict?.way_Team_player_10_id_from_Plyer_model}
                                    </h4>
                                    <span>Midfield</span>
                                </li>
                                <li>
                                    <h4>
                                        {data?.game_json_data_to_dict?.way_Team_player_11_id_from_Plyer_model}
                                    </h4>
                                    <span>Midfield</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5 mb-5">
                <div className='subs'>
                    <h2>Substitutions</h2>
                    <div className='row'>

                        <div className='col-xl-6 col-md-6 col-sm-6 col-6 team-left'>
                            <ul>
                                <li>
                                    <h4>
                                        {
                                            data?.Substituitons_json_data_to_dict?.map((item) => (
                                                <span>{item.Substituitons_Name},</span>
                                            ))
                                        }
                                        / 62 min
                                    </h4>
                                    {/* <h4>Murad Miya / 62 min</h4> */}
                                    <span>replaces {
                                        data?.Substituitons_json_data_to_dict?.map((item) => (
                                            <span>{item.PLayer_Name},</span>
                                        ))
                                    }</span>
                                    {/* <span>replaces Xavi</span> */}

                                </li>
                                <li>
                                    <h4>
                                        {
                                            data?.Substituitons_json_data_to_dict?.map((item) => (
                                                <span>{item.Substituitons_Name},</span>

                                            ))
                                        }
                                        / 45 min
                                    </h4>
                                    <span>replaces  {
                                        data?.Substituitons_json_data_to_dict?.map((item) => (
                                            <span>{item.PLayer_Name}, </span>
                                        ))
                                    }</span>
                                </li>
                            </ul>
                        </div>

                        <div className='col-xl-6 col-md-6 col-sm-6 col-6 team-right'>
                            <ul>
                                <li>
                                    <h4>  {
                                        data?.Substituitons_json_data_to_dict?.map((item) => (
                                            <span>{item.Substituitons_Name},</span>

                                        ))
                                    }/ 62 min</h4>
                                    <span>replaces  {
                                        data?.Substituitons_json_data_to_dict?.map((item) => (
                                            <span>{item.PLayer_Name}, </span>
                                        ))
                                    }</span>

                                </li>
                                <li>
                                    <h4>  {
                                        data?.Substituitons_json_data_to_dict?.map((item) => (
                                            <span>{item.Substituitons_Name},</span>

                                        ))
                                    }/ 62 min</h4>
                                    <span>replaces  {
                                        data?.Substituitons_json_data_to_dict?.map((item) => (
                                            <span>{item.PLayer_Name}, </span>
                                        ))
                                    }</span>

                                </li>
                            </ul>
                        </div>


                    </div>
                </div>

            </div>
            <CheckFa />
        </>
    )
}

export default LiveResult