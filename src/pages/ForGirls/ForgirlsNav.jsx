import React from 'react';
import {Link} from 'react-router-dom';

const ForgirlsNav = () => {
    return (
        <div>
            <div className="fg_nav">
                <div className="container">
                    {/* <div className="fg_navWrapper"> */}
                    <div className="row">
                        <div className="col-lg-12 fgnavs">
                            <ul className='fg_ul'>
                                <Link to="/never-played" className="link">
                                    <li className="fgul_lis first_item">
                                        NEVER PLAYED
                                    </li>
                                </Link>
                                <Link to="/play-sometimes" className="link">
                                    <li className="fgul_lis">PLAY SOMETIMES</li>
                                </Link>
                                <Link to="/play-alot" className="link">
                                    <li className="fgul_lis">PLAY A LOT</li>
                                </Link>
                                <Link to="/wildcats" className="link">
                                    <li className="fgul_lis">WILDCATS</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default ForgirlsNav