import React from 'react';
import Footer from '../../../components/Footer/Footer';
import Headers from '../../../components/Headers/Headers';
import ForgirlsNav from '../ForgirlsNav';
import './WildCats.css';

const WildCats = () => {
  return (
    <>
      <Headers />
      <ForgirlsNav />
      <div className="container">
        <p>wildcats</p>
      </div>
      <Footer />
    </>
  )
}

export default WildCats