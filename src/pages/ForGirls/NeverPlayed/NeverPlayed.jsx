import React from 'react';
import Footer from '../../../components/Footer/Footer';
import Headers from '../../../components/Headers/Headers';
import ForgirlsNav from '../ForgirlsNav';
import './NeverPlayed.css';

const NeverPlayed = () => {
  return (
    <>
        <Headers/>
        <ForgirlsNav/>
        <div className="container">
            <p>neverplayed</p>
        </div>
        <Footer/>
    </>
  )
}

export default NeverPlayed