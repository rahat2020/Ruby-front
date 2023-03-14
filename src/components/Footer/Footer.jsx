import React from "react";
import bff from '../../assets/bff.png';
// import tiktok from '../../assets/tik-tok.png';
import ksports from '../../assets/ksports.png';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import logoimg from '../../assets/logo.png';
import publicitix from '../../assets/publicitix.png';
import './Footer.css';
import { Link } from "react-router-dom";


const Footer = () => {

    return (
        <div className="footer">
            <div className="footer_first border-top border-light border-2">
                <div className="ffImg_container shadow-sm p-2 container">
                    <div className="ffpartnerleft">
                        <h4 className="text-uppercase fw-bold" style={{ color: '#011E41' }}>Our official partner and organizer</h4>
                    </div>
                    <div className="ffpartnerright d-flex">
                        <Link to="https://www.bff.com.bd/" target="_blank">
                            <img src={bff} alt="" className="ffimg" />
                        </Link>
                        <Link to="http://ksportsbd.com/" target="_blank">
                            <img src={ksports} alt="" className="ffimg_ksports " />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="footer_center"></div>

            <div className="footer_main">
                <div className="container">


                    <div className="row">
                        <div className="col-md-6">
                            <div className="footer_links">
                                <div className="flinks_items">

                                    <Link to="/contactus" className="link">
                                        <p className="fiItem_li">Contact US</p>
                                    </Link>
                                    <Link to="/privacy-policy" className="link">
                                        <p className="fiItem_li">Privacy policy </p>
                                    </Link>
                                    <Link to="/termsOfconditions" className="link">
                                        <p className="fiItem_li">Terms and Conditions of use</p>
                                    </Link>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="">
                                <div className="row">
                                    <div className="socialIcon_container">
                                        <div className="twtIcn_container">
                                            <Link to="https://twitter.com/wslbangladesh " target="_blank">
                                                <TwitterIcon className="twitter_icon" />
                                            </Link>
                                            <Link to="https://www.facebook.com/wslbangladesh" target="_blank">
                                                <FacebookOutlinedIcon className="twitter_icon" />
                                            </Link>
                                            <Link to="https://www.pinterest.com/wslbangladesh" target="_blank">
                                                <PinterestIcon className="twitter_icon" />
                                            </Link>
                                            <Link to="https://www.youtube.com/@wslbangladesh" target="_blank">
                                                <YouTubeIcon className="twitter_icon" />
                                            </Link>
                                            <Link to="https://www.instagram.com/wslbangladesh" target="_blank">
                                                <InstagramIcon className="twitter_icon" />
                                            </Link>
                                            <Link to="https://www.tiktok.com/@wslbangladesh" target="_blank">
                                                <i className="fa-brands fa-tiktok twitter_icon tiktok"></i>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                <p className="flRight_text fw-bold">Copyright © 2023 K-SPORTS All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
