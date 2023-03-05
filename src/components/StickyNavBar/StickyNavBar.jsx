import React, { useState,useEffect } from "react";
import './StickyNavbar.css'
import { Link } from 'react-router-dom';

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
        <div className="postion-sticky"  id="stickyNav">
            <div className="ff">
                    <ul className="navbar_nav">
                        <li className="nav_item">
                            <Link to="/all-news" className="nav-link sticky_li" href="#">
                                NEWS
                            </Link>
                        </li>
                        <li className="nav_item">
                            <Link to="/league-table" className="nav-link sticky_li" href="#">
                                LEAGUE TABLES
                            </Link>
                        </li>
                        <li className="nav_item">
                            <Link to="/fixtures-results" className="nav-link sticky_li" href="#">
                                FIXTURES AND RESULTS
                            </Link>
                        </li>
                        <li className="nav_item">
                            <Link to="/tickets" className="nav-link sticky_li" href="#">
                                TICKETS
                            </Link>
                        </li>
                        <li className="nav_item">
                            <Link to="/for-girls" className="nav-link sticky_li" href="#">
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