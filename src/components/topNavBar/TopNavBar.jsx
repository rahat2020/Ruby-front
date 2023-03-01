import React from "react";
import './TopNavBar.css';
// import logo from '../../assets/Logo Web Trial-01.png';
// import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const TopNavBar = () => {
    return (

        <div className="topNav">
            {/* <div className="container"></div> */}
            <div className="nav_left">
                <div className="navleft_ul">
                    <a href="#" className="flex px-4 text-sm items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="nav_icons text-white">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                            />
                        </svg>
                        <span className="topnav_li">Tickets</span>
                    </a>
                </div>
                <div className="navleft_ul">
                    <a href="#" className="flex px-4 text-sm items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="nav_icons text-white">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            />
                        </svg>

                        <span className="topnav_li">Mercendise</span>
                    </a>
                </div>
                <div className="navleft_ul">
                    <a href="#" className="flex px-4 text-sm items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" nav_icons text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                        </svg>
                        <span className="topnav_li">Wembley</span>
                    </a>
                </div>

                <div className="navleft_ul">
                    <a href="#" className="flex px-4 text-sm items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="nav_icons text-white">
                            <path
                                fillRule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className="topnav_li">St. George's Park</span>
                    </a>
                </div>

                <div className="navleft_ul">
                    <a href="#" className="flex px-4 text-sm items-center">
                    
                        <span className="topnav_li">More FA-sites</span>
                        <KeyboardArrowDownIcon className="text-white"/>
                    </a>
                </div>

            </div>
            <div className="nav_right">
                <div className="navRight_text">
                    <span>Powered by 
                        <b className="ms-1">PublicityX</b>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TopNavBar;


  // <div>
        //     <div className="flex h-7 bg-black">
        //         <div className="container mx-auto text-white flex text-sm items-center">
        //             <a href="#" className="flex px-4 text-sm items-center">
        //                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        //                     <path
        //                         strokeLinecap="round"
        //                         strokeLinejoin="round"
        //                         d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
        //                     />
        //                 </svg>
        //                 Tickets
        //             </a>
        //             <a href="#" className="flex px-4 text-sm items-center">
        //                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        //                     <path
        //                         strokeLinecap="round"
        //                         strokeLinejoin="round"
        //                         d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        //                     />
        //                 </svg>
        //                 Merchandise
        //             </a>
        //             <a href="#" className="flex px-4 text-sm items-center">
        //                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        //                     <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        //                 </svg>
        //                 Wembley
        //             </a>
        //       
        //             <a href="#" className="px-4 text-sm items-center ">
        //                 More FA sites
        //             </a>
        //             <a href="#" className="ml-auto text-sm items-center">
        //                 Powered by <span className="font-bold">PUBLICITIX</span>
        //             </a>
        //         </div>
        //     </div>
        //     <div className="container flex h-12 mx-auto navbar">
        //         <div className="font-bold leading-3 px-4 items-center">
        //             <h1 className="text-lg ">The Women's</h1>
        //             <h2>Leagues and Competitions</h2>
        //         </div>
        //         <div className="ml-auto flex items-center ">
        //             <div className="pr-4 text-right border-r-4 border-black">
        //                 <h1 className="text-xs">NEXT GAME 5-03-2023 9PM</h1>
        //                 <h2 className="text-lg">CHELSEA V ARSENAL</h2>
        //             </div>
        //         </div>
        //     </div>
        // </div>