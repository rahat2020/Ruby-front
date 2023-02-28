import React from "react";
import './StickyNavbar.css'
import { Link } from 'react-router-dom';

const StickyNavBar = () => {
    return (
        <div className="stickyNav">
            <div className="sticky-top">
                    <ul className="navbar_nav">
                        <li className="nav_item">
                            <Link to="/news" className="nav-link sticky_li" href="#">
                                NEWS
                            </Link>
                        </li>
                        <li className="nav_item">
                            <Link to="/" className="nav-link sticky_li" href="#">
                                LEAGUE TABLES
                            </Link>
                        </li>
                        <li className="nav_item">
                            <Link to="/" className="nav-link sticky_li" href="#">
                                FIXTURES AND RESULTS
                            </Link>
                        </li>
                        <li className="nav_item">
                            <Link to="/" className="nav-link sticky_li" href="#">
                                TICKETS
                            </Link>
                        </li>
                        <li className="nav_item">
                            <Link to="/" className="nav-link sticky_li" href="#">
                                FOR GIRLS
                            </Link>
                        </li>
                    </ul>
            </div>
        </div>
    );
};

export default StickyNavBar;

        // <div className="container mx-auto items-center font-bold h-16 text-lg flex justify-around shadow-md">
        //     <a className="border-r-4 black pr-12 border-black">NEWS</a>
        //     <a className="border-r-4 black pr-12 border-black">LEAGUE TABLES</a>
        //     <a className="border-r-4 black pr-12 border-black">FIXTURES AND RESULTS</a>
        //     <a className="border-r-4 black pr-12 border-black">TICKETS</a>
        //     <a className="border-r-4 black pr-12 border-black">FA PLAYER</a>
        //     <a className="">FOR GIRLS</a>
        // </div>