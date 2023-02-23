import React from "react";

const Footer = () => {
    return (
        <div className="">
            <div className="w-full h-36 mt-12 mb-12 bg-blue-900 border-b-2 border-black">
                <div className="container mx-auto flex justify-around">
                    <div className="mt-12 ml-12">
                        <h1 className="font-bold text-xl text-white">CHECK OUT THE FA</h1>
                        <h1 className="text-white">Get the latest news on everything football</h1>
                    </div>
                    <div className="h-12 w-44 mt-12 mr-12 bg-white items-center flex justify-between">
                        <a className="ml-2 bg-white">GO TO THE FA</a>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="w-full h-36 bg-gradient-to-r from-red-500 to-pink-700 flex items-center">
                <div className="container mx-auto flex text-white">
                    <div className="pr-4 font-bold">Contact Us</div>
                    <div className="pr-4 font-bold">Privacy Policy</div>
                    <div className="pr-4 font-bold">Terms of use</div>
                    <div className="pr-4 font-bold">Anti-Slavery</div>
                    <div className="pr-4 font-bold">Safeguarding</div>
                </div>
            </div>
            <div className="h-36 mx-auto bg-gradient-to-r from-gray-300 to-gray-600 flex items-center">
                <div className="container mx-auto flex text-white justify-between">
                    <img className="h-16 w-32" src="https://upload.wikimedia.org/wikipedia/en/4/4b/Tricotex_Women%27s_Football_League_Bangladesh_logo.png" alt="" />
                    <div className="mt-5">
                        <h1 className="text-xs">POWERED BY</h1>
                        <h1 className="">PUBLICITIX</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
