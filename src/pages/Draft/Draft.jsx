import React, { useEffect } from 'react'
import Headers from '../../components/Headers/Headers'
import DraftNav from './DraftNav/DraftNav'
import circle from '../../assets/circle.png';
import './Draft.css';

const Draft = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    }, [])
    return (
        <>
            <Headers />
            <DraftNav />
            <div className="drft">
                <div className="container">
                    <div className="dft_container">
                        <div className="dftImg_container">
                            <img src={circle} alt="circle" className='dftcircleImg' />

                            <div className="imgcenterTxt">
                                <p className='dftmaintext'>Technical and Others staffs</p>
                            </div>
                            <div className="imgTextOne_con">
                                <p className='imgTexTone text-white fw-bold'>Head Coach</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Draft