import React from 'react';
import Headers from '../../components/Headers/Headers';
import ComingSoon from '../ComingSoon/ComingSoon';
import MoreNav from './MoreNav';
import cmsoon from '../../assets/coming.png';


const More = () => {
    return (
        <>
            <Headers />
            <MoreNav />
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

export default More