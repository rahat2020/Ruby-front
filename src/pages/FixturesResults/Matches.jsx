import React, { useEffect, useState } from 'react';
import Headers from '../../components/Headers/Headers';
import m from '../../assets/manchester.jpg';
import './Matches.css';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import axios from 'axios'
import LeagueNav from '../LeaguTable/LeagueNav';
import MatchesNav from './MatchesNav';

const Matches = () => {
  // FETCH DATA FROM DATABASE
  const [data, setData] = useState([])
  // console.log('data', data)

  useEffect(() => {
    const newsData = async () => {
      const data = new FormData();
      data.append('Process', "see");
      // console.log('Process', data.append('Process', "see_all_news"));
      const res = await axios.post('https://api.wslbangladesh.com/Event/find_all/', data);
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
      {/* <MatchesNav /> */}
      <div className="container  mt-5 mb-5">
        <div className="d-flex text-start my-4">
          <h4 className="fw-bold shadow-sm">BANGLADESH WOMEN'S SUPER LEAGUE</h4>
        </div>
        <div className="fixturesSelect d-flex align-items-start ">
          <button className='btn btn-dark shadow fw-bold btn_fixture'>FIXTURES</button>
          <Link to="/match-results">
            <button className='btn btn-light shadow fw-bold ms-2'>RESULTS</button>
          </Link>

          {/* <div className="frcompetitons border-bottom border-3 border-secondary bg-light ms-4">
            <select className="form-select  border-0 fw-bold " aria-label="Default select example">
              <option selected className="fw-bold ffoptiopn">
                <p className='frcom'>COMPETITIONS</p>{"   "}Bangladesh woman's super league
                <ArrowDropDownIcon />
              </option>
              <option value="Bangladesh woman's super league">Bangladesh woman's super league</option>
              <option value="Bangladesh woman's super league">Bangladesh woman's super league</option>
              <option value="Bangladesh woman's super league">Bangladesh woman's super league</option>
            </select>
          </div> */}

          <div className="frslec border-bottom border-3 border-secondary bg-light ms-4">
            <select className="form-select  border-0 fw-bold form_slct" aria-label="Default select example">
              <option selected className="fw-bold ffoptiopn">
                <small className='frcom'>SEASON</small>  {"   "}2022/2023
                <ArrowDropDownIcon /></option>
              <option value="2023/2024">2023/2024</option>
              <option value="2023/2025">2023/2025</option>
              <option value="2023/2026">2023/2026</option>
            </select>
          </div>



        </div>
        <div className="text-start my-4">
          <h4 className="fw-bod border-light border shadow-sm py-1 px-1">MAR 2023</h4>
        </div>
        <div className="fixtures">
          <div className='container'>
            <div className='fixture-box'>
              <div>
                <div className='row shadow-sm'>
                  {
                    data.map((item, i) => (
                      <React.Fragment key={i}>
                        <div className='col-md-2 col-sm-12 date'>
                          <h4>{item.Event_Date_Time.slice(0, 10)}</h4>
                        </div>
                        <div className='col-md-2 col-sm-12 date'>
                          <h4>KICK OFF {item.Event_Date_Time.slice(10, 20)}</h4>
                          {/* <span>4</span> */}
                          <p> BANGABANDHU STADIUM <br /> DHAKA </p>
                        </div>

                        <div className='col-md-4 col-sm-12 vs-card'>
                          <img src={m} alt="logo" style={{ width: '40px', height: '40px', marginRight: '20px' }} />
                          <span>{item.Home_Team}</span>
                          <h5 style={{ margin: '0 15px 0 15px' }} >VS</h5>
                          <span>{item.Way_Team}</span>
                          <img src={`https://api.wslbangladesh.com` + item.Event_Logo} alt="logo"
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
                      </React.Fragment>
                    ))
                  }

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Matches