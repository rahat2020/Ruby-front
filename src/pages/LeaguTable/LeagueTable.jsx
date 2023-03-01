import React from 'react';
import Headers from '../../components/Headers/Headers';
import './LeagueTable.css';
import m from '../../assets/manchester.jpg';
import Footer from '../../components/Footer/Footer';

const LeagueTable = () => {
    return (
        <>
            <Headers />
            <div className="container mb-5">
                <h4>League Table</h4>
                <table className="table table-striped table-bordered border-light">
                    <thead>
                        <tr className="text-center">
                            <th scope="col">Rank</th>
                            <th scope="col">Club</th>
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
                        <tr className='text-center fw-normal'>
                            <th scope="row">1</th>
                            <td>
                                <img src={m} alt="team-logo" style={{ width: '30px', height: '30px', marginRight: '20px' }} />
                                Menchester
                            </td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr className='text-center fw-normal'>
                            <th scope="row">1</th>
                            <td>
                                <img src={m} alt="team-logo" style={{ width: '30px', height: '30px', marginRight: '20px' }} />
                                Menchester
                            </td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr className='text-center fw-normal'>
                            <th scope="row">1</th>
                            <td>
                                <img src={m} alt="team-logo" style={{ width: '30px', height: '30px', marginRight: '20px' }} />
                                Menchester
                            </td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr className='text-center fw-normal'>
                            <th scope="row">1</th>
                            <td>
                                <img src={m} alt="team-logo" style={{ width: '30px', height: '30px', marginRight: '20px' }} />
                                Menchester
                            </td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr className='text-center fw-normal'>
                            <th scope="row">1</th>
                            <td>
                                <img src={m} alt="team-logo" style={{ width: '30px', height: '30px', marginRight: '20px' }} />
                                Menchester
                            </td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    )
}

export default LeagueTable

