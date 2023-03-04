import React, { useEffect, useState } from 'react';
import Headers from '../../components/Headers/Headers';
import m from '../../assets/manchester.jpg';
import './FixturesResults.css';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios'

const FixturesResults = () => {
  // FETCH DATA FROM DATABASE
  const [data, setData] = useState([])
  // console.log('data', data)

  useEffect(() => {
    const newsData = async () => {
      const data = new FormData();
      data.append('Process', "see");
      // console.log('Process', data.append('Process', "see_all_news"));
      const res = await axios.post('https://h.earnvest.xyz/Event/find_all/', data);
      // console.log(res.data);
      setData(res.data);
    }
    newsData()
  }, [])

    // const date = data.map((item, i) =>(
    //   <li key={i}>{item.Event_Date_Time}</li>
    // ))
    // console.log('date',date)
  // const dateString = data.Event_Date_Time;
  // const date = new Date(dateString);
  // const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

  return (
    <>
      <Headers />
      <div className="container  mt-5 mb-5">
        <div className="d-flex text-start">
          <h4>BANGLADESH WOMEN'S SUPER LEAGUE</h4>
        </div>
        <div className="fixturesSelect d-flex align-items-start">
          <button className='btn btn-dark shadow'>FIXTURES</button>
          <button className='btn btn-light shadow ms-2'>RESULTS</button>

          <div className="dropdown ms-5">
            <a className="btn btn-light dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              <div className="d-flex justify-content-start align-items-start flex-column">
                <small className="select_com">SEASON</small>
                <span className="select_title">2022/2023</span>
              </div>
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><a className="dropdown-item" href="#">2023/2024</a></li>
              <li><a className="dropdown-item" href="#">2023/2024</a></li>
              <li><a className="dropdown-item" href="#">2023/2024</a></li>
            </ul>
          </div>
        </div>
        <div className="text-start">
          <h4>MAR 2023</h4>
        </div>
        <div className="fixtures">
          <div className='container'>
            <div className='fixture-box'>
              <div>
                <div className='row'>
                  {
                    data.map((item, i) => (
                      <>
                        <div className='col-md-1 col-sm-12 date'>
                          <h4>{item.Event_Date_Time.slice(0,10)}</h4>
                        </div>
                        <div className='col-md-2 col-sm-12 date'>
                          <h4>KICK OFF {item.Event_Date_Time.slice(10,20)}</h4>
                          <p> BANGABANDHU STADIUM <br /> DHAKA </p>

                        </div>
                        <div className='col-md-5 col-sm-12 vs-card'>
                          <img src={m} alt="logo" style={{ width: '40px', height: '40px', marginRight: '20px' }} />
                          <span>{item.Home_Team}</span>

                          <h5 style={{ margin: '0 15px 0 15px' }} >VS</h5>
                          <span>{item.Way_Team}</span>
                          <img src={`https://h.earnvest.xyz`+item.Event_Logo} alt="logo" 
                          style={{ width: '40px', height: '40px', marginLeft: '20px' }} />
                        </div>
                        <div className='fixture-buttons col-md-4 col-sm-12 date'>
                          <Link to={`/single-results/${item.id}`}>
                            <button className="card_btn">WATCH HERE</button>
                          </Link>
                          <Link to='/tickets'>
                            <button className='card_btn_red'>BUY TICKETS</button>
                          </Link>
                        </div>
                      </>
                    ))
                  }


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default FixturesResults