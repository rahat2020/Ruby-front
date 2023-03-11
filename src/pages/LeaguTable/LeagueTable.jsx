import React, { useEffect, useState } from 'react';
import Headers from '../../components/Headers/Headers';
import './LeagueTable.css';
import m from '../../assets/manchester.jpg';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';
import LeagueNav from './LeagueNav';

const LeagueTable = () => {
    const [data, setData] = useState([])
    console.log('leagdata', data)

    useEffect(() => {
        const newsData = async () => {
            const data = new FormData();
            data.append('Process', "see_all_team");
            console.log('Process', data.append('Process', "see_all_team"));
            const res = await axios.post('https://api.wslbangladesh.com/Team/find_all_team/', data);
            console.log(res.data);
            setData(res.data);
        }
        newsData()
    }, [])

    // sorting the data
    const [tableData, setTableData] = useState(data);
    const sortData = () => {
      const sortedData = [...tableData].sort((a, b) => b.points - a.points);
      setTableData(sortedData);
    };

    // automatically will be fetched
    // const [tableData, setTableData] = useState([]);
    // useEffect(() => {
    //   const sortedData = [...data].sort((a, b) => b.points - a.points);
    //   setTableData(sortedData);
    // }, [])

    return (
        <>
            <Headers />
            {/* <LeagueNav/> */}
            <div className="container mt-5 mb-5">
                <div className='league-table-top '>
                    <h4 className='league-title fw-bold shadow-sm p-2 rounded mb-5'>Women's Super League</h4>
                </div>

                <table className="league-table table table-striped table-bordered border-light">
                    <thead>
                        <tr className="text-center">
                            <th scope="col">Rank</th>
                            <th scope="col" className='text-start'>Club</th>
                            <th scope="col">P</th>
                            <th scope="col">W</th>
                            <th scope="col">D</th>
                            <th scope="col">L</th>
                            <th scope="col">GF</th>
                            <th scope="col">GA</th>
                            <th scope="col">GD</th>
                            <th scope="col">Pts</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, i) => (
                                <tr className='text-center fw-normal' key={i}>
                                    <th scope="row">{item.id}</th>
                                    <td className='text-start'>
                                        <div className='team-name'>
                                            <img src={`https://api.wslbangladesh.com` + item.Team_Logo} alt="team-logo" 
                                            style={{ width: '30px', height: '30px', marginRight: '20px' }} />
                                            <span>{item.Team_Name}</span>
                                        </div>
                                    </td>
                                    <td>{item.Team_Total_play_count}</td>
                                    <td>{item.Win_count}</td>
                                    <td>{item.Loos_count}</td>
                                    <td>{item.Drow_count}</td>
                                    <td>{item.GF}</td>
                                    <td>{item.GA}</td>
                                    <td>{item.GD}</td>
                                    <td>{item.PTS}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default LeagueTable

