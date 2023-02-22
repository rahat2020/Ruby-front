import React from "react";

const StickyNavBar = () => {
    return (
        <div className="container mx-auto items-center font-bold h-16 text-lg flex justify-around shadow-md">
            <a className="border-r-4 black pr-12 border-black">NEWS</a>
            <a className="border-r-4 black pr-12 border-black">LEAGUE TABLES</a>
            <a className="border-r-4 black pr-12 border-black">FIXTURES AND RESULTS</a>
            <a className="border-r-4 black pr-12 border-black">TICKETS</a>
            <a className="border-r-4 black pr-12 border-black">FA PLAYER</a>
            <a className="">FOR GIRLS</a>
        </div>
    );
};

export default StickyNavBar;
