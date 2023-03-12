// import React from "react";
// import bff from '../../assets/bff.png';
// import ksports from '../../assets/ksports.png';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
// import PinterestIcon from '@mui/icons-material/Pinterest';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import logoimg from '../../assets/logo.png';
// import publicitix from '../../assets/publicitix.png';
// import './Footer.css';
// import { Link } from "react-router-dom";


// const Footer = () => {

//     return (
//         <div className="footer">
//             <div className="footer_first border-top border-light border-2">
//                 <div className="ffImg_container shadow-sm p-2 container">
//                     <div className="ffpartnerleft">
//                         <h4 className="text-uppercase fw-bold" style={{ color: '#011E41' }}>Our official partner and organizer</h4>
//                     </div>
//                     <div className="ffpartnerright d-flex">
//                         <Link to="https://www.bff.com.bd/" target="_blank">
//                             <img src={bff} alt="" className="ffimg" />
//                         </Link>
//                         <Link to="http://ksportsbd.com/" target="_blank">
//                             <img src={ksports} alt="" className="ffimg " />
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//             <div className="footer_center"></div>
//             {/* <div className="footer_partner">
//                 <div className="fpImg_container">
//                     <div className="imgPme">
//                         <img src={vitality} alt="" className="fpimage" />
//                     </div>
//                     <div className="imgPme">
//                         <img src={nike} alt="" className="fpimage nike" />
//                     </div>
//                     <div className="imgPme">
//                         <img src={continental} alt="" className="fpimage continental" />
//                     </div>
//                     <div className="imgPme">
//                         <img src={continental} alt="" className="fpimage continental" />
//                     </div>
//                     <div className="imgPme ms-3">
//                         <img src={sports} alt="" className="fpimage sports" />
//                     </div>
//                     <div className="imgPme ms-3">
//                         <img src={sports} alt="" className="fpimage sports" />
//                     </div>
//                     <div className="imgPme ms-3">
//                         <img src={sports} alt="" className="fpimage sports" />
//                     </div>
//                 </div>
//             </div> */}
//             <div className="footer_main">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-sm-6 col-xs-6">
//                             <div className="twtIcn_container">
//                                 <Link to="https://twitter.com/wslbangladesh ">
//                                     <TwitterIcon className="twitter_icon" />
//                                 </Link>
//                                 <Link to="https://twitter.com/wslbangladesh ">
//                                     <FacebookOutlinedIcon className="twitter_icon" />
//                                 </Link>
//                                 <Link to="https://twitter.com/wslbangladesh ">
//                                     <PinterestIcon className="twitter_icon" />
//                                 </Link>
//                                 <Link to="https://twitter.com/wslbangladesh ">
//                                     <YouTubeIcon className="twitter_icon" />
//                                 </Link>

//                             </div>
//                         </div>
//                         {/* <div className="col-sm-6 col-xs-6">
//                             <div className="twitter_right">
//                                 <div className="btn-group dropup">
//                                     <button type="button"
//                                         className="twitterDropdown dropdown-toggle"
//                                         data-bs-toggle="dropdown"
//                                         aria-expanded="false">
//                                         <span className="twitter_title text-uppercase">THE bff</span>
//                                     </button>
//                                     <ul className="dropdown-menu">
//                                         <li><a className="dropdown-item flsDrp_li" href="#">International</a></li>
//                                         <li><a className="dropdown-item flsDrp_li" href="#">Mens League</a></li>
//                                         <li><a className="dropdown-item flsDrp_li" href="#">Womans League</a></li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div> */}
//                     </div>
//                 </div>
//                 <div className="container">
//                     <div className="footer_links">
//                         <div className="flinks_items">
//                             <ul className="flItem">
//                                 <Link to="/contactus" className="link">
//                                     <li className="fiItem_li">Contact US</li>
//                                 </Link>
//                                 <Link to="/privacy-policy" className="link">
//                                     <li className="fiItem_li">Privacy policy </li>
//                                 </Link>
//                                 <Link to="/termsOfconditions" className="link">
//                                     <li className="fiItem_li">Terms and Conditions of use</li>
//                                 </Link>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="footer_last">
//                 <div className="container">
//                     <div className="row flst_container">
//                         <div className="col-sm-6">
//                             <div className="flimg_head_container">
//                                 <div className="flImage_container">
//                                     <img src={logoimg} alt="" className="flimg" />
//                                 </div>

//                             </div>
//                         </div>
//                         <div className="col-sm-6">
//                             <div className="flrightimg_container">
//                                 <img src={publicitix} alt="" className="flRightImg" />
//                                 <p className="flRight_text fw-bold">K-SPORTS</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Footer;



// CSSS

// .footer {
//     width: 100%;
//     height: 100vh;
//     /* overflow: hidden; */
// }
// .ffImg_container{
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     width: 100%;
//     height: 60%;
// }
// .ffpartnerleft{
//     width: 50%;
// }
// .ffpartnerright{
//     width: 50%;
//     height: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// }
// .ffpartnerright .ffimg{
//     width:50%;
//     object-fit: cover;
// }
// .ffimg:hover{
//     box-shadow: 1px 1px 6px 2px rgba(247,247,247,0.75);
// -webkit-box-shadow: 1px 1px 6px 2px rgba(247,247,247,0.75);
// -moz-box-shadow: 1px 1px 6px 2px rgba(247,247,247,0.75);
// }
// .footer_first {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin-bottom: 2rem;
// }

// .footer_center {
//     margin-top: 2rem;
//     border-top: 2px solid #7e7e7e67;
// }

// .fpImg_container {
//     display: flex;
//     justify-content: center;
//     align-items: center;
// }

// .imgPme {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 100%;
//     height: 100%;
// }

// .imgPme .fpimage {
//     width: 130px;
//     height: 100%;
//     object-fit: cover;
// }

// .nike,
// .continental,
// .sports {
//     margin-left: 7rem;
// }

// .footer_main {
//     background-image: url('../../assets/pinkbg.jpg');
//     background-repeat: repeat;
//     background-position: center;
//     object-fit: cover;
//     width: 100%;
//     height: 40vh;
// }

// .footer_main .twitter_icon {
//     color: #fff !important;
//     width: 40px;
//     height: 30px;
//     margin-top: 4rem;
// }

// .twitter_right {
//     display: flex;
//     justify-content: flex-end;
//     margin-top: 4rem;
// }

// .twitter_right .twitterDropdown {
//     background-color: #fdfdfd00;
//     padding: .66rem 3rem;
//     border: none;
//     color: #fff;
//     border-bottom: 1px solid #fff;
// }

// .twitter_title {
//     margin-left: -3rem;
//     font-weight: bold;
// }

// .dropup .dropdown-toggle::after {
//     display: inline-block;
//     margin-left: 8em;
//     vertical-align: 0.255em;
//     content: "";
//     color: #fff;
//     border-top: 0;
//     border-right: .36em solid transparent;
//     border-bottom: 0.3em solid;
//     border-left: .36em solid transparent;
// }

// .footer_links {
//     margin-top: 4rem;
//     border-top: 1px solid #ffffffdc;
// }

// .flinks_items {
//     width: 70%;
//     margin-top: 1rem;
//     display: flex;
//     justify-content: flex-start;
//     align-items: start;
// }

// .fiItem_li {
//     color: #fff;
//     font-weight: bold;
//     margin-right: 1.66rem;
//     font-size: 1.15em;
// }

// /* footer last */
// .footer_last {
//     background-image: url(https://womenscompetitions.thefa.com/Content/site/img/FemaleEngagement/bg/texture-fa-neutral.svg);
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-position: center;
//     padding-top:10px;
// }

// .flImage_container {
//     width: 60%;
//     height: 100%;
//     display: flex;
//     /* justify-content: flex-start; */
//     align-items: center;
// }

// .flImage_container .flimg {
//     width: 100%;
// }

// .flrightimg_container {
//     width: 100%;
//     height: 100%;
//     display: flex;
//     justify-content: flex-end;
//     align-items: end;
//     flex-direction: column;
// }

// .flrightimg_container .flRightImg {
//     width: 7rem;
//     /* height: 3.25rem; */
// }

// .flRight_text {
//     font-family: arial;
//     font-weight: bold;
//     font-size: .7rem;
//     line-height: 12px;
//     color: #424242;
// }

// .footer_partner {
//     overflow: hidden;
// }

// /* responsive styles */
// @media only screen and (max-width: 768px) {
//     .topNav {
//         display: none;
//     }
// }
// @media only screen and (min-width: 1268px) {
//     .footer {
//         width: 100%;
//         height: 100%;
//     }
//     .footer_main {
//         background-image: url('../../assets/pinkbg.jpg');
//         background-repeat: repeat;
//         background-position: center;
//         object-fit: cover;
//         width: 100%;
//         height: 40vh;
//     }
// }

// @media only screen and (max-width: 468px) {
//     .footer {
//         width: 100%;
//         height: 100%;
//     }
//     .ffImg_container .ffimg{
//         width: 60%;
//         height: 60%;
//         object-fit: cover;
//     }

//     .footer_partner {
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         overflow: auto;
//         white-space: nowrap;
//         width: 100vw !important;
//         /* overflow: hidden; */
//         height: 30vh;
//     }

//     .footer_main {
//         background-image: url('../../assets/pinkbg.jpg');
//         background-repeat: no-repeat;
//         background-position: center;
//         object-fit: cover;
//         width: 100%;
//         height: 100%;
//     }

//     .twitter_right .twitterDropdown {
//         background-color: #fdfdfd00;
//         padding: .6rem 1rem;
//         margin-bottom: 2rem;
//         border: none;
//         color: #fff;
//         border-bottom: 1px solid #fff;
//     }

//     .twitter_title {
//         margin-left: -1rem;
//         font-weight: bold;
//     }

//     .imgPme {
//         width: 300px;
//         height: 100px;
//     }

//     .imgPme .fpimage {
//         width: 100px;
//         height: 100px;
//         object-fit: cover;
//     }

//     .footer_main .twitter_icon {
//         margin-top: 1rem;
//     }

//     .nike,
//     .continental,
//     .sports {
//         margin-left: 2rem;
//     }

//     .twtIcn_container {
//         display: flex;
//         justify-content: center;
//         align-items: center;
//     }

//     .twitter_right {
//         display: flex;
//         justify-content: center;
//         margin-top: 1rem;
//     }

//     .flst_container {
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         flex-wrap: wrap;
//     }

//     .flrightimg_container {
//         width: 100%;
//         height: 100%;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         flex-direction: column;
//     }

//     .flimg_head_container {
//         display: flex;
//         justify-content: center !important;
//         align-items: center;
//     }

//     .flImage_container {
//         width: 343px;
//         height: 100px;

//     }

//     /* .flrightimg_container .flRightImg {
//         width: 11.25rem;
//         height: 3.25rem;
//         margin-top: 10px;
//     } */
//     .flrightimg_container .flRightImg {
//         width: 15rem;
//         margin-top: 10px;
//     }

//     .fiItem_li {
//         color: #fff;
//         font-weight: bold;
//         margin-right: 1.66rem;
//         font-size: .87em;
//     }

//     .footer_links {
//         margin-top: 0;
//         border-top: 1px solid #ffffffdc;
//     }

// }