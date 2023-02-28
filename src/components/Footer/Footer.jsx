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
                    <div className="imgPme ms-3">
                        <img src={sports} alt="" className="fpimage sports" />
                    </div>
                </div>
            </div>
            <div className="footer_main">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-md-6">
                            <TwitterIcon className="twitter_icon" />
                        </div>
                        <div className="col-md-6">
                            <div className="twitter_right">
                                <div className="btn-group dropup">
                                    <button type="button"
                                        className="twitterDropdown dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <span className="twitter_title">THE FA</span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
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
                    <div className="row">
                        <div className="col-md-6">
                            <div className="flImage_container">
                                <img src={logoimg} alt="" className="flimg" />
                            </div>
                        </div>
                        <div className="col-md-6">
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
        //                 <h1 className="text-white">Get the latest news on everything football</h1>
        //             </div>
        //             <div className="h-12 w-44 mt-12 mr-12 bg-white items-center flex justify-between">
        //                 <a className="ml-2 bg-white">GO TO THE FA</a>
        //                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        //                     <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
        //                 </svg>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="w-full h-36 bg-gradient-to-r from-red-500 to-pink-700 flex items-center">
        //         <div className="container mx-auto flex text-white">
        //             <div className="pr-4 font-bold">Contact Us</div>
        //             <div className="pr-4 font-bold">Privacy Policy</div>
        //             <div className="pr-4 font-bold">Terms of use</div>
        //             <div className="pr-4 font-bold">Anti-Slavery</div>
        //             <div className="pr-4 font-bold">Safeguarding</div>
        //         </div>
        //     </div>
        //     <div className="h-36 mx-auto bg-gradient-to-r from-gray-300 to-gray-600 flex items-center">
        //         <div className="container mx-auto flex text-white justify-between">
        //             <img className="h-16 w-32" src="https://upload.wikimedia.org/wikipedia/en/4/4b/Tricotex_Women%27s_Football_League_Bangladesh_logo.png" alt="" />
        //             <div className="mt-5">
        //                 <h1 className="text-xs">POWERED BY</h1>
        //                 <h1 className="">PUBLICITIX</h1>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Footer;
