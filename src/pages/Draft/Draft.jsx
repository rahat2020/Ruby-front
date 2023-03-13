import React, { useEffect } from 'react'
import Headers from '../../components/Headers/Headers'
import DraftNav from './DraftNav/DraftNav'
import staaffs from '../../assets/staaffs.png';
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
                        <div className="dftTitle d-flex justify-content-start align-items-center">
                            <h3 className="link fw-bold shadow-sm p-2">Technical and Others Staffs</h3>
                        </div>
                        <div className="dftImg_container">

                            <img src={staaffs} alt="circle" className='dftcircleImg' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Draft