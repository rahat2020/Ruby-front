import React, { useState, useEffect } from "react";
import './StickyNavbar.css'
import { Link } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const StickyNavBar = () => {
    const [sticky, setSticky] = useState(false)
    useEffect(() => {
        const sticky_top = () => {
            if (window.scrollY >= 476) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        }
        // console.log('sticky',sticky)
        // changeColor()
        window.addEventListener('scroll', sticky_top)
    }, [])



    return (
        <div className="postion-sticky" id="stickyNav">
            <div className="ff">
                <ul className="navbar_nav">
                    <div className="container">
                        <li className="nav_item ">
                            <Link to="/abouts" className="nav-link sticky_li">
                                ABOUT
                            </Link>
                        </li>
                        <li className="nav_item line">
                            <Link to="/matches_others" className="nav-link sticky_li">
                                MATCHES
                            </Link>
                        </li>
                        <li className="nav_item line">
                            <Link to="/all_videos" className="nav-link sticky_li">
                                VIDEO
                            </Link>
                        </li>
                        {/* <li className="nav_item line">
                            <Link to="/cms" className="nav-link sticky_li">
                                STATS
                            </Link>
                        </li> */}
                        <li className="nav_item  line">
                            <Link to="/league-table" className="nav-link sticky_li" href="#">
                                POINT TABLES
                            </Link>
                        </li>
                        <li className="nav_item line">
                            <Link to="/all_teams" className="nav-link sticky_li" href="#">
                                TEAMS
                            </Link>
                        </li>
                        <li className="nav_item line">
                            <Link to="/drafts" className="nav-link sticky_li" href="#">
                                DRAFT
                            </Link>
                        </li>
                        <li className="nav_item line">
                            <Link to="/all-news" className="nav-link sticky_li" href="#">
                                NEWS
                            </Link>
                        </li>

                        <li className="nav_item line" >
                            <Link to="/more" className="nav-link sticky_li" >
                                MORE
                            </Link>
                        </li>
                    </div>
                </ul>
            </div>
        </div >
    );
};

export default StickyNavBar;

// import React, { useState, useEffect } from "react";
// import './StickyNavbar.css'
// import { Link } from 'react-router-dom';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// const StickyNavBar = () => {
//     const [sticky, setSticky] = useState(false)
//     useEffect(() => {
//         const sticky_top = () => {
//             if (window.scrollY >= 476) {
//                 setSticky(true);
//             } else {
//                 setSticky(false);
//             }
//         }
//         // console.log('sticky',sticky)
//         // changeColor()
//         window.addEventListener('scroll', sticky_top)
//     }, [])

//     // DROPDOWN LIST TIEM SHOWING
//     const [isOpen, setIsOpen] = useState(false);

//     function handleDropdownClick() {
//         setIsOpen(!isOpen);
//     }

//     // function handleWindowClick(e) {
//     //     if (isOpen && !e.target.closest('.dropdown')) {
//     //         setIsOpen(false);
//     //     }
//     // }

//     // window.addEventListener('click', handleWindowClick);

//     // const [dropdownStyle, setDropdownStyle] = useState({ minHeight: 'auto' });

//     // const handleClosedropwDown = () => {
//     //   setDropdownStyle({ minHeight: '95px !important' });
//     // };

//     return (
//         <div className="postion-sticky" id="stickyNav">
//             <div className="ff">
//                 <ul className="navbar_nav">
//                     <li className="nav_item dropdown">
//                         <div className="line"></div>
//                         <Link to="/matches_others" className="nav-link sticky_li">
//                             MATCHES
//                         </Link>
//                         {/* <a className="nav-link  sticky_li" href="#fixtures-results" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                 MATCHES
//                             </a> */}

//                         {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                             <li><Link to="/" className="dropdown-item link">SCHEDULE</Link></li>
//                             <li><Link to="/fixtures-results" className="dropdown-item link">RESULTS</Link></li>
//                         </ul> */}
//                     </li>
//                     <li className="nav_item dropdown">
//                         <Link to="/all_videos" className="nav-link sticky_li">
//                             VIDEO
//                         </Link>
//                         {/* <a className="nav-link  sticky_li" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                             VIDEO
//                         </a>
//                         <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                             <li className="stn_icon"><Link to="/All-videos" className="dropdown-item link">
//                                 ALL VIDEOS <ChevronRightIcon className="stnIcon_rightArrow" /></Link>
//                             </li>
//                             <li className="stn_icon"><Link to="/cms" className="dropdown-item link">
//                                 HIGHLIGHTS <ChevronRightIcon className="stnIcon_rightArrow" /></Link>
//                             </li>
//                             <li className="stn_icon"><Link to="/cms" className="dropdown-item link">
//                                 INTERVIEWS <ChevronRightIcon className="stnIcon_rightArrow" /></Link>
//                             </li>
//                             <li className="stn_icon"><Link to="/cms" className="dropdown-item link">
//                                 PRESS CONFERENCE <ChevronRightIcon className="stnIcon_rightArrow" /></Link>
//                             </li>
//                         </ul> */}
//                     </li>
//                     <li className="nav_item dropdown">
//                         <Link to="/cms" className="nav-link sticky_li">
//                             STATS
//                         </Link>
//                         {/* <a className="nav-link  sticky_li" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                 STATS
//                             </a> */}
//                         {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                             <li><Link to="/" className="dropdown-item link">2023</Link></li>
//                             <li><Link to="/" className="dropdown-item link">2024</Link></li>
//                             <li><Link to="/" className="dropdown-item link">2022</Link></li>
//                         </ul> */}
//                     </li>
//                     <li className="nav_item">
//                         <Link to="/league-table" className="nav-link sticky_li" href="#">
//                             POINT TABLES
//                         </Link>
//                     </li>
//                     <li className="nav_item">
//                         <Link to="/all_teams" className="nav-link sticky_li" href="#">
//                             TEAMS
//                         </Link>
//                     </li>
//                     <li className="nav_item">
//                         <Link to="/cms" className="nav-link sticky_li" href="#">
//                             AUCTION
//                         </Link>
//                     </li>
//                     <li className="nav_item">
//                         <Link to="/all-news" className="nav-link sticky_li" href="#">
//                             NEWS
//                         </Link>
//                     </li>

//                     {/* <li className="nav_item dp_dwon_container" onMouseOver={handleDropdownClick}>
//                         <Link to="/fixtures-results" className="nav-link sticky_li" href="#">
//                             MATCHES
//                         </Link>
//                         <div className={`dropdown-menu ${isOpen ? 'open' : ''}`} onMouseOver={handleDropdownClick}>
//                             <Link to="/">Item 1</Link>
//                             <Link to="/">Item 2</Link>
//                             <Link to="/">Item 3</Link>
//                         </div>
//                         dropdown-toggle
//                     </li> */}

//                     <li className="nav_item dropdown" >
//                         <Link to="/more" className="nav-link sticky_li" >
//                             MORE
//                         </Link>
//                         {/* <a className="nav-link  sticky_li" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                             MORE
//                         </a> */}
//                         {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                             <li className="stn_icon"><Link to="/cms" className="dropdown-item link">
//                                 ABOUT <ChevronRightIcon className="stnIcon_rightArrow" /></Link>
//                             </li>
//                             <li className="stn_icon"><Link to="/cms" className="dropdown-item link">
//                                 MOBILE PRODUCTIONS <ChevronRightIcon className="stnIcon_rightArrow" /></Link>
//                             </li>
//                             <li className="stn_icon"><Link to="/cms" className="dropdown-item link">
//                                 FANTASY <ChevronRightIcon className="stnIcon_rightArrow" /></Link>
//                             </li>
//                             <li className="stn_icon"><Link to="/cms" className="dropdown-item link">
//                                 PHOTOS <ChevronRightIcon className="stnIcon_rightArrow" /></Link>
//                             </li>
//                             <li className="stn_icon"><Link to="/cms" className="dropdown-item link">
//                                 VENUES <ChevronRightIcon className="stnIcon_rightArrow" /></Link>
//                             </li>
//                             <li className="stn_icon"><Link to="/cms" className="dropdown-item link">
//                                 FORGIRLS <ChevronRightIcon className="stnIcon_rightArrow" /></Link>
//                             </li>
//                         </ul> */}
//                     </li>





//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default StickyNavBar;

//         // <div className="container mx-auto items-center font-bold h-16 text-lg flex justify-around shadow-md">
//         //     <a className="border-r-4 black pr-12 border-black">NEWS</a>
//         //     <a className="border-r-4 black pr-12 border-black">LEAGUE TABLES</a>
//         //     <a className="border-r-4 black pr-12 border-black">FIXTURES AND RESULTS</a>
//         //     <a className="border-r-4 black pr-12 border-black">TICKETS</a>
//         //     <a className="border-r-4 black pr-12 border-black">FA PLAYER</a>
//         //     <a className="">FOR GIRLS</a>
//         // </div>