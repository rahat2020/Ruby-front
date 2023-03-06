import React, { useState, useEffect } from "react";
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

    // DROPDOWN LIST TIEM SHOWING
    const [isOpen, setIsOpen] = useState(false);

    function handleDropdownClick() {
        setIsOpen(!isOpen);
    }

    // function handleWindowClick(e) {
    //     if (isOpen && !e.target.closest('.dropdown')) {
    //         setIsOpen(false);
    //     }
    // }

    // window.addEventListener('click', handleWindowClick);

    // const [dropdownStyle, setDropdownStyle] = useState({ minHeight: 'auto' });

    // const handleClosedropwDown = () => {
    //   setDropdownStyle({ minHeight: '95px !important' });
    // };
   
    return (
        <div className="postion-sticky" id="stickyNav">
            <div className="ff">
                <ul className="navbar_nav">
                    <li className="nav_item">
                        <Link to="/all-news" className="nav-link sticky_li" href="#">
                            NEWS
                        </Link>
                    </li>
                    <li className="nav_item">
                        <Link to="/league-table" className="nav-link sticky_li" href="#">
                            POINT TABLES
                        </Link>
                    </li>
                    {/* <li className="nav_item dp_dwon_container" onMouseOver={handleDropdownClick}>
                        <Link to="/fixtures-results" className="nav-link sticky_li" href="#">
                            MATCHES
                        </Link>
                        <div className={`dropdown-menu ${isOpen ? 'open' : ''}`} onMouseOver={handleDropdownClick}>
                            <Link to="/">Item 1</Link>
                            <Link to="/">Item 2</Link>
                            <Link to="/">Item 3</Link>
                        </div>
                        dropdown-toggle
                    </li> */}
                    <li className="nav_item dropdown">
                        <a className="nav-link  sticky_li" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            MATCHES
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link to="/" className="dropdown-item link">SCHEDULE</Link></li>
                            <li><Link to="/fixtures-results" className="dropdown-item link">RESULTS</Link></li>
                        </ul>
                    </li>
                    <li className="nav_item dropdown">
                        <a className="nav-link  sticky_li" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            MORE
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link to="/" className="dropdown-item link">ABOUT</Link></li>
                            <li><Link to="/" className="dropdown-item link">MOBILE PRODUCTIONS</Link></li>
                            <li><Link to="/" className="dropdown-item link">FANTASY</Link></li>
                            <li><Link to="/" className="dropdown-item link">PHOTOS</Link></li>
                            <li><Link to="/" className="dropdown-item link">VENUES</Link></li>
                            <li><Link to="/" className="dropdown-item link">FORGIRLS</Link></li>
                        </ul>
                    </li>
                    <li className="nav_item dropdown">
                        <a className="nav-link  sticky_li" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            VIDEO
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link to="/All-videos" className="dropdown-item link">ALL VIDEOS</Link></li>
                            <li><Link to="/" className="dropdown-item link">HIGHLIGHTS</Link></li>
                            <li><Link to="/" className="dropdown-item link">INTERVIEWS</Link></li>
                            <li><Link to="/" className="dropdown-item link">PRESS CONFERENCE</Link></li>
                        </ul>
                    </li>
                    <li className="nav_item dropdown">
                        <a className="nav-link  sticky_li" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            STATS
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link to="/" className="dropdown-item link">2023</Link></li>
                            <li><Link to="/" className="dropdown-item link">2024</Link></li>
                            <li><Link to="/" className="dropdown-item link">2022</Link></li>
                        </ul>
                    </li>

                    <li className="nav_item">
                        <Link to="/all_teams" className="nav-link sticky_li" href="#">
                            TEAMS
                        </Link>
                    </li>
                    <li className="nav_item">
                        <Link to="/aucntions" className="nav-link sticky_li" href="#">
                            AUCTION
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