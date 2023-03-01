import React from 'react';
import Headers from '../../components/Headers/Headers';
import m from '../../assets/manchester.jpg';
import './FixturesResults.css';
import Footer from '../../components/Footer/Footer';


const FixturesResults = () => {
  return (
    <>
      <Headers />
      <div className="container mb-5">
        <div className="d-flex text-start">
          <h4>BARCLAYS WOMEN'S SUPER LEAGUE</h4>
        </div>
        <div className="fixturesSelect d-flex align-items-start">
          <button className='btn btn-dark shadow'>FIXTURES</button>
          <button className='btn btn-light shadow ms-2'>RESULTS</button>
          <div className="dropdown ms-5">
            <a className="btn btn-light dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              <div className="d-flex justify-content-start align-items-start flex-column">
                <small className="select_com">COMPETITON</small>
                <span className="select_title">BARCLAYS WOMEN'S SUPER LEAGUE</span>
              </div>
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><a className="dropdown-item" href="#">BARCLAYS WOMEN'S SUPER LEAGUE</a></li>
              <li><a className="dropdown-item" href="#">BARCLAYS WOMEN'S SUPER LEAGUE</a></li>
              <li><a className="dropdown-item" href="#">BARCLAYS WOMEN'S SUPER LEAGUE</a></li>
            </ul>
          </div>

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
          <div className="d-flex">
            <table className="table">
              {/* <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead> */}
              <tbody className="border-dark">
                <tr  className='text-center align-items-center'>
                  {/* <th scope="row">1</th> */}
                  <td>SUN 5 MAR</td>
                  <td className="text-center">
                    <small>
                      KICK OFF 18:30 <br />
                      LEIGH SPORTS VILLAGE <br /> STADIUM
                    </small>
                  </td>
                  <td>
                    <span>MENCHESTER</span>
                    <img src={m} alt="logo" style={{ width: '40px', height: '40px', marginLeft: '20px' }} />
                  </td>
                  <td>VS</td>
                  <td>
                    <span>MENCHESTER</span>
                    <img src={m} alt="logo" style={{ width: '40px', height: '40px', marginLeft: '20px' }} />
                  </td>
                  <td>
                    <button className="btn btn-primary text-bold">WATCH HERE</button>
                  </td>
                  <td>
                    <button className='btn btn-danger text-bold'>BUY TICKETS</button>
                  </td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default FixturesResults