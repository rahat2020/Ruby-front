import React from 'react';
import './Topsubnav.css';
import image from '../../assets/logo.png';
import verses from '../../assets/verse.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Topsubnav = () => {
    return (
        <div className="container">
            <div className="row topsubnav">
                <div className="col-md-6">
                    <div className="topsubLeft_imgContainer">
                        <img src={image} alt="" className="topsubimg" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="topsRight">
                        <div className="topsubRight">
                            <span className="topsubGmeTime">NEXT GAME 2023-3-3 03:00 PM</span>
                            <p>
                                <span className="fw-bold">CHELSE</span>
                                <span className='topsubVerses'>
                                    <img src={verses} alt="" className='topsubVerses_img' />
                                </span>
                                <span className='fw-bold'>ARSENAL</span>
                            </p>
                        </div>
                        <div className="topsubProfile">
                            {/* <p>rahat</p> */}
                            <AccountCircleIcon className='topsubProPic'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topsubnav