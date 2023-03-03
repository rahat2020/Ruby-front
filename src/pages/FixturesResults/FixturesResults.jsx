import React from 'react';
import Headers from '../../components/Headers/Headers';
import m from '../../assets/manchester.jpg';
import './FixturesResults.css';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';


const FixturesResults = () => {
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
                  <div className='col-md-1 col-sm-12 date'>
                    <h4>SUN 5 MAR</h4>
                  </div>
                  <div className='col-md-2 col-sm-12 date'>
                    <h4>KICH OFF 18:30</h4>
                    <p> BANGABANDHU STADIUM <br /> DHAKA </p>

                  </div>
                  <div className='col-md-5 col-sm-12 vs-card'>
                    <img src={m} alt="logo" style={{ width: '40px', height: '40px', marginRight: '20px' }} />
                    <span>MENCHESTER</span>

                    <h5 style={{ margin: '0 15px 0 15px' }} >VS</h5>
                    <span>MENCHESTER</span>
                    <img src={m} alt="logo" style={{ width: '40px', height: '40px', marginLeft: '20px' }} />
                  </div>
                  <div className='fixture-buttons col-md-4 col-sm-12 date'>
                    <Link to='/single-results'>
                      <button className="card_btn">WATCH HERE</button>
                    </Link>
                    <Link to='/tickets'>
                    <button className='card_btn_red'>BUY TICKETS</button>
                    </Link>
                   

                  </div>
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