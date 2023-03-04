import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Headers from '../../components/Headers/Headers';
import m from '../../assets/manchester.jpg';
import './Tickets.css';
import Swal from 'sweetalert2';

const Tickets = () => {

    // const [data, setData] = useState([])
    // console.log('data', data)

    // useEffect(() => {
    //   const newsData = async () => {
    //     const data = new FormData();
    //     data.append('Process', "see_all_news");
    //     console.log('Process', data.append('Process', "see_all_news"));
    //     const res = await axios.post('https://h.earnvest.xyz/news/find_all_news/', data);
    //     console.log(res.data);
    //     setData(res.data);
    //   }
    //   newsData()
    // }, [])

    const handleAlert = (data) => {
         Swal.fire({
            icon: 'info',
            title: 'Tickets is not available',
        })
    }

    return (
        <>
            <Headers />
            <div className="container">
                <div className="tickets">
                    <div className="row">
                        <div className="col-md-3 colamThree">
                            <div className="card tckt " >
                                <div className="tcktImg_container d-flex justify-content-center align-items-center flex-column">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img src={m} className="card-img-top tckt_tem_img" alt="team-logo" />
                                    </div>

                                </div>
                                <div className="card-body tckt_body">
                                    <button className='Tckt_btn'>
                                        <span className="cardbtn_text fw-bold text-dark" onClick={handleAlert}>
                                            BUY TICKETS
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 colamThree">
                            <div className="card tckt " >
                                <div className="tcktImg_container d-flex justify-content-center align-items-center flex-column">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img src="https://womenscompetitions.thefa.com/-/media/project/femaleengagement/clubslogo/wc/aston-villa-womens-football-team-crest.ashx" className="card-img-top tckt_tem_img" alt="team-logo" />
                                    </div>

                                </div>
                                <div className="card-body tckt_body">
                                    <button className='Tckt_btn'>
                                        <span className="cardbtn_text fw-bold text-dark" onClick={handleAlert}>
                                            BUY TICKETS
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 colamThree">
                            <div className="card tckt " >
                                <div className="tcktImg_container d-flex justify-content-center align-items-center flex-column">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img src="https://womenscompetitions.thefa.com/-/media/project/femaleengagement/clubslogo/wsl/brighton-womens-football-team-crest.ashx" className="card-img-top tckt_tem_img" alt="team-logo" />
                                    </div>

                                </div>
                                <div className="card-body tckt_body">
                                    <button className='Tckt_btn'>
                                        <span className="cardbtn_text fw-bold text-dark" onClick={handleAlert}>
                                            BUY TICKETS
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 colamThree">
                            <div className="card tckt " >
                                <div className="tcktImg_container d-flex justify-content-center align-items-center flex-column">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img src="https://womenscompetitions.thefa.com/-/media/project/femaleengagement/clubslogo/wsl/chelsea-womens-football-team-crest.ashx" className="card-img-top tckt_tem_img" alt="team-logo" />
                                    </div>

                                </div>
                                <div className="card-body tckt_body">
                                    <button className='Tckt_btn'>
                                        <span className="cardbtn_text fw-bold text-dark" onClick={handleAlert}>
                                            BUY TICKETS
                                        </span>
                                    </button>
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

export default Tickets