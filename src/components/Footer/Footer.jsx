import React from "react";
import barclays from '../../assets/barclays.jpg';
import vitality from '../../assets/vitality.jpg';
import nike from '../../assets/nike.png';
import continental from '../../assets/continental.jpg';
import sports from '../../assets/sports.png';
import TwitterIcon from '@mui/icons-material/Twitter';
import logoimg from '../../assets/logo.png';
import cognizant from '../../assets/cognizant.png';
import './Footer.css';


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_first">
                <div className="ffImg_container">
                    <img src={barclays} alt="" className="ffimg" />
                </div>
            </div>
            <div className="footer_center"></div>
            <div className="footer_partner">
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
            </div>
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
                                        <span className="twitter_title">THE FA</span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item flsDrp_li" href="#">Action</a></li>
                                        <li><a className="dropdown-item flsDrp_li" href="#">Another action</a></li>
                                        <li><a className="dropdown-item flsDrp_li" href="#">Something else here</a></li>
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
                                <li className="fiItem_li">Contact US</li>
                                <li className="fiItem_li">Privacy policy </li>
                                <li className="fiItem_li">Terms of use</li>
                                <li className="fiItem_li">Anti-Slavery</li>
                                <li className="fiItem_li">Safeguarding</li>

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
                                <img src={cognizant} alt="" className="flRightImg" />
                                <p className="flRight_text">The Football Association © 2001 - 2021. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // Contact Us Privacy policy Terms of use Anti-Slavery Safeguarding
        // <div className="">
        //     <div className="w-full h-36 mt-12 mb-12 bg-blue-900 border-b-2 border-black">
        //         <div className="container mx-auto flex justify-around">
        //             <div className="mt-12 ml-12">
        //                 <h1 className="font-bold text-xl text-white">CHECK OUT THE FA</h1>
        //                 <h1 className="tex
        //                 <h1 className="text-xs">POWERED BY</h1>
        //                 <h1 className="">PUBLICITIX</h1>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Footer;
