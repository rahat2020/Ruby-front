import React from 'react';
import Footer from '../../components/Footer/Footer';
import Headers from '../../components/Headers/Headers';
import m from '../../assets/manchester.jpg';
import './Tickets.css';

const Tickets = () => {
    return (
        <>
            <Headers />
            <div className="container">
                <div className="tickets">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card tckt " style={{ width: '13rem' }}>
                                <div className="tcktImg_container d-flex justify-content-center align-items-center flex-column">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img src={m} className="card-img-top tckt_tem_img" alt="team-logo" />
                                    </div>

                                </div>
                                <div className="card-body tckt_body">
                                    <button className='Tckt_btn'>
                                        <span className="cardbtn_text fw-bold text-dark">
                                            BUY TICKETS
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card tckt " style={{ width: '13rem' }}>
                                <div className="tcktImg_container d-flex justify-content-center align-items-center flex-column">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img src="https://womenscompetitions.thefa.com/-/media/project/femaleengagement/clubslogo/wc/aston-villa-womens-football-team-crest.ashx" className="card-img-top tckt_tem_img" alt="team-logo" />
                                    </div>

                                </div>
                                <div className="card-body tckt_body">
                                    <button className='Tckt_btn'>
                                        <span className="cardbtn_text fw-bold text-dark">
                                            BUY TICKETS
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card tckt " style={{ width: '13rem' }}>
                                <div className="tcktImg_container d-flex justify-content-center align-items-center flex-column">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img src="https://womenscompetitions.thefa.com/-/media/project/femaleengagement/clubslogo/wsl/brighton-womens-football-team-crest.ashx" className="card-img-top tckt_tem_img" alt="team-logo" />
                                    </div>

                                </div>
                                <div className="card-body tckt_body">
                                    <button className='Tckt_btn'>
                                        <span className="cardbtn_text fw-bold text-dark">
                                            BUY TICKETS
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card tckt " style={{ width: '13rem' }}>
                                <div className="tcktImg_container d-flex justify-content-center align-items-center flex-column">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img src="https://womenscompetitions.thefa.com/-/media/project/femaleengagement/clubslogo/wsl/chelsea-womens-football-team-crest.ashx" className="card-img-top tckt_tem_img" alt="team-logo" />
                                    </div>

                                </div>
                                <div className="card-body tckt_body">
                                    <button className='Tckt_btn'>
                                        <span className="cardbtn_text fw-bold text-dark">
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