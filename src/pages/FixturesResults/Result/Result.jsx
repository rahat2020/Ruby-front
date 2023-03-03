import React from 'react';
import './Result.css';
import man from '../../../assets/manchester.jpg';
import ball from '../../../assets/goal.svg';
import yc from '../../../assets/warning.svg';
import Headers from '../../../components/Headers/Headers';
import Footer from '../../../components/Footer/Footer';
import CheckFa from '../../../components/CheckFa/CheckFa';

const Result = () => {
    return (
        <>
            <Headers/>

            <div className='result-header'>
                <div className='result-date'>
                    <h5>3rd March, 8:00pm</h5>
                    <span>Bangabandhu Stadium</span>
                </div>

                <div className='container result-container' style={{paddingTop:'100px', maxWidth:'1000px', marginLeft:'auto', marginRight: 'auto'}}>
                    <div className='row'>

                        <div className='col-md-5 result-card-right'>
                            <img src={man} alt="" />
                            <h3>MANCHESTER <span>2</span></h3>                           
                        </div>

                        <div className='col-md-2 result-vs'>
                            <h3>VS</h3>
                        </div>
                        
                        <div className='col-md-5 result-card-left'>
                            <h3><span>2</span> MANCHESTER</h3>
                            <img src={man} alt="" /> 
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
                    <h2>Moments Of The Game</h2>
                    <div className='row'>

                     <div className='col-xl-6 col-md-6 col-sm-6 col-6 team-left'>
                        <ul>
                            <li>
                                <h4 style={{fontWeight:'900'}}> <img src={ball} alt="" /> Rahi Bari / 32 min</h4>                                
                            </li>
                            <li>
                                <h4 style={{fontWeight:'900'}}> <img src={yc} alt="" /> TR Niloy / 40 min</h4>                                
                            </li>
                        </ul>
                     </div>

                     <div className='col-xl-6 col-md-6 col-sm-6 col-6 team-right'>
                     <ul>
                            <li>
                                <h4 style={{fontWeight:'900'}}> Rahi Bari / 32 min  <img src={ball} alt="" /></h4>                                
                            </li>
                            <li>
                                <h4 style={{fontWeight:'900'}}>  TR Niloy / 40 min <img src={yc} alt="" /></h4>                                
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
            <CheckFa/>
            <Footer/>
        </>
    )
}

export default Result