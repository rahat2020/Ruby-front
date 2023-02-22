import React from "react";

const Carousel = (props) => {
    return (
        <div className=" h-[580px] w-full m-auto relative">
            <div style={{ backgroundImage: `url(${props.slides[props.index].url})` }} className="w-full h-full bg-center bg-cover duration-500"></div>
            <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 rounded-full p-2" onClick={props.handlePrevClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 20 20">
                    <path fill="white" fill-rule="evenodd" d="M12.707 5.293a1 1 0 0 1 0 1.414L9.414 10l3.293 3.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0Z" clip-rule="evenodd" />
                </svg>
            </div>
            <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 20 20" onClick={props.handleNextClick}>
                    <path fill="white" fill-rule="evenodd" d="M7.293 14.707a1 1 0 0 1 0-1.414L10.586 10L7.293 6.707a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0Z" clip-rule="evenodd" />
                </svg>
            </div>
        </div>
    );
};

export default Carousel;
