import React from 'react';
import Footer from '../../../components/Footer/Footer';
import Headers from '../../../components/Headers/Headers';
import ForgirlsNav from '../ForgirlsNav';
import './PlayAlot.css';

const PlayAlot = () => {
  return (
    <>
      <Headers />
      <ForgirlsNav />
      <div className="container">
        <p>play a lot</p>
      </div>
      <Footer/>
    </>
  )
}

export default PlayAlot