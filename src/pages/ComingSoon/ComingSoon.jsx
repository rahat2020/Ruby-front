import React from 'react';
import Headers from '../../components/Headers/Headers';
import cmsoon from '../../assets/coming.png';
import './ComingSoon.css';

const ComingSoon = () => {
    return (
        <>
            <Headers />
            <div className="cmsoon">
                <div className="container  d-flex justify-content-center align-items-cente">
                    <div className="cmsoon_containerr">
                        <img src={cmsoon} alt="" className="cmsImg" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ComingSoon