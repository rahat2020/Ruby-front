import React,{useEffect} from 'react';
import './Award.css';
import aw from '../../assets/awards.jpeg';
import win from '../../assets/winner.png';
import winam from '../../assets/winam.png';
import sec from '../../assets/second.png';
import runam from '../../assets/runam.png';
import gg from '../../assets/gg.png';
import gb from '../../assets/gb.png';
import gba from '../../assets/gba.png';
import medal from '../../assets/medal.png';
import Headers from '../../components/Headers/Headers';

const Award = () => {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

}, [])
  return (
    <>
      <Headers />
      <div>
        <div className='award-top'>
          <img src={aw} alt="" />
        </div>
        <div className="d-flex justify-content-center align-items-center mt-3">
          <h1 className='link shadow-sm p-2'>AWARDS & PRIZES</h1>
        </div>

        <div className='container finalists'>
          <div className='row'>

            <div className='col-md-6'>
              <img src={win} alt="" />
              <img src={winam} alt="" />

            </div>

            <div className='col-md-6'>
              <img src={sec} alt="" />
              <img src={runam} alt="" />
            </div>

          </div>


        </div>

        <div className='individuals'>
          <h2>SEASON BEST INDIVIDUALS</h2>

          <div className='container'>
            <div className='row'>

              <div className='col-md-4'>
                <img src={gg} alt="" />
                <div className='indi-card'>
                  <h3>GOLDEN GLOVES</h3>
                  <h4>$3000</h4>
                </div>
              </div>

              <div className='col-md-4'>
                <img src={gba} alt="" />
                <div className='indi-card'>
                  <h3>GOLDEN BALL</h3>
                  <h4>$3000</h4>
                </div>
              </div>

              <div className='col-md-4'>
                <img src={gb} alt="" />
                <div className='indi-card'>
                  <h3>GOLDEN BOOT</h3>
                  <h4>$3000</h4>
                </div>
              </div>

            </div>

          </div>



        </div>

        <div className='single-indi'>
          <h2>INDIVIDUALS</h2>
        </div>

        <div className='container'>
          <div className='row'>

            <div className='col-md-6 first-round'>
              <h3>FIRST ROUND</h3>
              <div className='award-box'>
                <img src={medal} alt="" />
                <h4>PLAYER OF THE MATCH</h4>
                <h5>$250</h5>
              </div>

              <div className='award-box'>
                <img src={medal} alt="" />
                <h4>STAR OF THE MATCH</h4>
                <h5>$250</h5>
              </div><div className='award-box'>
                <img src={medal} alt="" />
                <h4>WINNING TEAM</h4>
                <h5>$500</h5>
              </div>

            </div>

            <div className='col-md-6 qualifiers'>
              <h3>QUALIFIERS</h3>

              <div className='award-box'>
                <img src={medal} alt="" />
                <h4>PLAYER OF THE MATCH</h4>
                <h5>$500</h5>
              </div>

              <div className='award-box'>
                <img src={medal} alt="" />
                <h4>STAR OF THE MATCH</h4>
                <h5>$500</h5>
              </div>
              <div className='award-box'>
                <img src={medal} alt="" />
                <h4>WINNING TEAM</h4>
                <h5>$1000</h5>
              </div>

            </div>

          </div>
          <div className='row final'>

            <h3>FINAL</h3>
            <div className='col-md-6'>
              <div className='award-box'>
                <img src={medal} alt="" />
                <h4>PLAYER OF THE MATCH</h4>
                <h5>$1000</h5>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='award-box'>
                <img src={medal} alt="" />
                <h4>STAR OF THE MATCH</h4>
                <h5>$1000</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Award