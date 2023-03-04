import React from 'react';
import Headers from '../../components/Headers/Headers';
import './LeagueTable.css';
import m from '../../assets/manchester.jpg';
import Footer from '../../components/Footer/Footer';

const LeagueTable = () => {
      // FETCH DATA FROM DATABASE
    //   const [data, setData] = useState([])
    //   useEffect(() => {
    //       const newsData = async () => {
    //           const data = new FormData();
    //           data.append('Process', "see_all_news");
    //           const res = await axios.post('https://h.earnvest.xyz/news/find_all_news/', data);
    //           setData(res.data);
    //       }
    //       newsData()
    //   }, [])

    return (
        <>
            <Headers />
            <div className="container mt-5 mb-5">
                <div className='league-table-top'>

                <h4 className='league-title mb-5'>Women's Super League</h4>
                <div className="dropdown ms-5">
                    <a className="btn btn-light dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    <div className="d-flex justify-content-start align-items-start flex-column">
                        <small className="select_com">SEASON</small>
                        <span className="select_title">2023</span>
                    </div>
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><a className="dropdown-item" href="#">2023/2024</a></li>
                        <li><a className="dropdown-item" href="#">2023/2024</a></li>
                        <li><a className="dropdown-item" href="#">2023/2024</a></li>
                    </ul>
                </div>

                </div>
                
                <table className="league-table table table-striped table-bordered border-light">
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
                            <div className='team-name'>
                                <img src={m} alt="team-logo" style={{ width: '30px', height: '30px', marginRight: '20px' }} />
                                <span>Menchester</span> 
                                </div>
                            </td>
                            <td>32</td>
                            <td>64</td>
                            <td>23</td>
                            <td>34</td>
                            <td>00</td>
                            <td>12</td>
                            <td>+32</td>
                            <td>33</td>
                        </tr>
                        <tr className='text-center fw-normal'>
                            <th scope="row">1</th>
                            <td>
                            <div className='team-name'>
                                <img src={m} alt="team-logo" style={{ width: '30px', height: '30px', marginRight: '20px' }} />
                                <span>Menchester</span> 
                                </div> 
                            </td>
                            <td>32</td>
                            <td>64</td>
                            <td>23</td>
                            <td>34</td>
                            <td>00</td>
                            <td>12</td>
                            <td>+32</td>
                            <td>33</td>
                        </tr>
                        <tr className='text-center fw-normal'>
                            <th scope="row">1</th>
                            <td>
                            <div className='team-name'>
                                <img src={m} alt="team-logo" style={{ width: '30px', height: '30px', marginRight: '20px' }} />
                                <span>Menchester</span> 
                                </div> 
                            </td>
                            <td>32</td>
                            <td>64</td>
                            <td>23</td>
                            <td>34</td>
                            <td>00</td>
                            <td>12</td>
                            <td>+32</td>
                            <td>33</td>
                        </tr>
                        <tr className='text-center fw-normal'>
                            <th scope="row">1</th>
                            <td>
                            <div className='team-name'>
                                <img src={m} alt="team-logo" style={{ width: '30px', height: '30px', marginRight: '20px' }} />
                                <span>Menchester</span> 
                                </div>
                            </td>
                            <td>32</td>
                            <td>64</td>
                            <td>23</td>
                            <td>34</td>
                            <td>00</td>
                            <td>12</td>
                            <td>+32</td>
                            <td>33</td>
                        </tr>
                        <tr className='text-center fw-normal'>
                            <th scope="row">1</th>
                            <td>
                                <div className='team-name'>
                                <img src={m} alt="team-logo" style={{ width: '30px', height: '30px', marginRight: '20px' }} />
                                <span>Menchester</span> 
                                </div>
                                
                            </td>
                            <td>32</td>
                            <td>64</td>
                            <td>23</td>
                            <td>34</td>
                            <td>00</td>
                            <td>12</td>
                            <td>+32</td>
                            <td>33</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    )
}

export default LeagueTable

