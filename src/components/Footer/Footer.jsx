import React from "react";
import bff from '../../assets/bff.png';
import ksports from '../../assets/ksports.png';
import TwitterIcon from '@mui/icons-material/Twitter';
import logoimg from '../../assets/logo.png';
import publicitix from '../../assets/publicitix.png';
import './Footer.css';
import { Link } from "react-router-dom";


const Footer = () => {

    return (
        <div className="footer">
            <div className="footer_first border-top border-light border-2">
                <div className="ffImg_container shadow-sm p-3 ">
                    <Link to="https://www.bff.com.bd/" target="_blank">
                        <img src={bff} alt="" className="ffimg" />
                    </Link>
                    <Link to="http://ksportsbd.com/" target="_blank">
                        <img src={ksports} alt="" className="ffimg " />
                    </Link>
                </div>
            </div>
            <div className="footer_center"></div>
            {/* <div className="footer_partner">
                <div className="fpImg_container">
                    <div className="imgPme">
                        <img src={vitality} alt="" className="fpimage" />
                    </div>
                    <div className="imgPme">
                        <img src={nike} alt="" className="fpimage nike" />
                    </div>
                    <div className="imgPme">
                        <img src={continental} alt="" className="fpimage continental" />
                    </div>
                    <div className="imgPme">
                        <img src={continental} alt="" className="fpimage continental" />
                    </div>
                    <div className="imgPme ms-3">
                        <img src={sports} alt="" className="fpimage sports" />
                    </div>
                    <div className="imgPme ms-3">
                        <img src={sports} alt="" className="fpimage sports" />
                    </div>
                    <div className="imgPme ms-3">
                        <img src={sports} alt="" className="fpimage sports" />
                    </div>
                </div>
            </div> */}
            <div className="footer_main">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-xs-6">
                            <div className="twtIcn_container">
                                <TwitterIcon className="twitter_icon" />
                            </div>
                        </div>
                        <div className="col-sm-6 col-xs-6">
                            <div className="twitter_right">
                                <div className="btn-group dropup">
                                    <button type="button"
                                        className="twitterDropdown dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <span className="twitter_title text-uppercase">THE bff</span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item flsDrp_li" href="#">International</a></li>
                                        <li><a className="dropdown-item flsDrp_li" href="#">Mens League</a></li>
                                        <li><a className="dropdown-item flsDrp_li" href="#">Womans League</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="footer_links">
                        <div className="flinks_items">
                            <ul className="flItem">
                                <Link to="/contactus" className="link">
                                    <li className="fiItem_li">Contact US</li>
                                </Link>
                                <Link to="/privacy-policy" className="link">
                                    <li className="fiItem_li">Privacy policy </li>
                                </Link>
                                <Link to="/termsOfconditions" className="link">
                                    <li className="fiItem_li">Terms and Conditions of use</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer_last">
                <div className="container">
                    <div className="row flst_container">
                        <div className="col-sm-6">
                            <div className="flimg_head_container">
                                <div className="flImage_container">
                                    <img src={logoimg} alt="" className="flimg" />
                                </div>

                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="flrightimg_container">
                                <img src={publicitix} alt="" className="flRightImg" />
                                <p className="flRight_text">The Football Association © 2001 - 2021. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
