import React, { useState, useEffect } from 'react';
import './Result.css';
import man from '../../../assets/manchester.jpg';
import ball from '../../../assets/goal.svg';
import yc from '../../../assets/warning.svg';
import Headers from '../../../components/Headers/Headers';
import Footer from '../../../components/Footer/Footer';
import CheckFa from '../../../components/CheckFa/CheckFa';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Result = () => {
    const { id } = useParams()
    // console.log(id)
    // FETCH DATA FROM DATABASE
    const [data, setData] = useState({})
    console.log('data', data?.Goal_json_data_to_dict?.map(i => i.Goal_Date_Time))
    console.log('data', data?.Goal_json_data_to_dict)
    // console.log('data', data?.Goal_json_data_to_dict?.map(i => Number(i.Home_Team_Goal_Count_In_1)))
    // console.log('data', data.game_json_data_to_dict)
    // console.log('resultsData', data?.Substituitons_json_data_to_dict)
    // console.log('resultsData', data?.game_json_data_to_dict?.Event_for_game)


    const time = (data?.Goal_json_data_to_dict?.map(i => i?.Goal_Date_Time))
    const newTime = new Date(time)
    // console.log('newTime',newTime)
    const exactTime = newTime.toLocaleTimeString()
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
            const res = await axios.post('https://h.earnvest.xyz/Game/find_game_with_Event_id/', data);
            // console.log(res)
            setData(res.data);
        }
        newsData()
    }, )

    // fetching EVENT data FOR STADIUM NAME
    const [stadNmae, setstadNmae] = useState([])
    // console.log('stadNmae', stadNmae.Home_Team)

    useEffect(() => {
        const newsData = async () => {
            const data = new FormData();
            data.append('Process', 'see');
            data.append('id', id);
            const res = await axios.post('https://h.earnvest.xyz/Event/find_individual_id/', data);
            // console.log(res)
            setstadNmae(res.data);
        }
        newsData()
    }, )

    // FETCHING TEAM DETAILS
    const [homeTeamLogo, setHomeTeamLogo] = useState('')
    // console.log('homeTeamLogo', homeTeamLogo)

    useEffect(() => {
        const newsData = async () => {
            const data = new FormData();
            data.append('Process', 'find_team_with_team_name');
            data.append('team_name', stadNmae?.Home_Team);
            const res = await axios.post('https://h.earnvest.xyz/Team/find_team_with_team_name/', data);
            // console.log(res)
            setHomeTeamLogo(res.data);
        }
        newsData()
    }, )


    return (
        <>
            <Headers />

            <div className='result-header'>
                <div className='result-date'>
                    <h5>3rd March, 8:00pm</h5>
                    <span>{stadNmae?.Stadium_Name}</span>
                </div>

                <div className='container result-container'
                    style={{
                        paddingTop: '100px', maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto'
                    }}>
                    <div className='row responsive'>
                        <div className='col-md-5 result-card-right'>
                            <img src={`https://h.earnvest.xyz` + homeTeamLogo?.Team_Logo} alt="" />
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
                            <img src={`https://h.earnvest.xyz` + homeTeamLogo?.Team_Logo} alt="" />
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
                    </h2> */}
                    <h2>Moments Of The Game</h2>
                    <div className='row'>

                        <div className='col-xl-6 col-md-6 col-sm-6 col-6 team-left'>
                            <ul>
                                <li>
                                    <h4 style={{ fontWeight: '900' }}> <img src={ball} alt="" />
                                        {
                                            data?.Goal_json_data_to_dict?.map((item, i) => (item.Scorer_Name))
                                        } 
                                        / {exactTime} min</h4>
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
                                    {/* <h4 style={{ fontWeight: '900' }}> {data.Way_Team_Goal_Count_In_1.Scorer_Name} / 32 min  <img src={ball} alt="" /></h4> */}
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
                                    <h4>Rahi Bari</h4>
                                    <span>Goalkeeper</span>

                                </li>
                                <li>
                                    <h4>Toybur Rahman</h4>
                                    <span>Right Back</span>
                                </li>
                                <li>
                                    <h4>Raju Mat</h4>
                                    <span>Centre Back</span>
                                </li>
                            </ul>
                        </div>

                        <div className='col-xl-6 col-md-6 col-sm-6 col-6 team-right'>
                            <ul>
                                <li>
                                    <h4>Iker Casillas</h4>
                                    <span>Goalkeeper</span>
                                </li>
                                <li>
                                    <h4>Carvajal</h4>
                                    <span>Right Back</span>
                                </li>
                                <li>
                                    <h4>Luka Modric</h4>
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
                                    <h4>Murad Miya / 62 min</h4>
                                    <span>replaces Xavi</span>

                                </li>
                                <li>
                                    <h4>Toybur Rahman / 45 min</h4>
                                    <span>replaces Nadim</span>
                                </li>
                            </ul>
                        </div>

                        <div className='col-xl-6 col-md-6 col-sm-6 col-6 team-right'>
                            <ul>
                                <li>
                                    <h4>Kroos / 62 min</h4>
                                    <span>replaces Ozil</span>

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

export default Result