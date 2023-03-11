import React, { useState, useEffect } from "react";
import './CommonNav.css'
import { Link } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const CommonNav = () => {
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
                <li className="nav_item ">
                    {/* <div className="line"></div> */}
                    <Link to="/matches_others" className="nav-link sticky_li">
                        MATCHES
                    </Link>
                </li>
                <li className="nav_item line">
                    <Link to="/all_videos" className="nav-link sticky_li">
                        VIDEO
                    </Link>
                </li>
                <li className="nav_item line">
                    <Link to="/cms" className="nav-link sticky_li">
                        STATS
                    </Link>
                </li>
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
                    <Link to="/cms" className="nav-link sticky_li" href="#">
                        AUCTION
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
            </ul>
        </div>
    </div>
    );
};

export default CommonNav;
