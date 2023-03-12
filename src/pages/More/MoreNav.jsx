import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MoreNav = () => {
    // FETCH DATA FROM DATABASE
    const [nvrcolor, setNvrColor] = useState(false)
    const [playAcolor, setPlayAColor] = useState(false)
    const [someTcolor, setSomeTColor] = useState(false)
    const [wildcolor, setWildColor] = useState(false)

    const handleColorOne = () => {
        setNvrColor(true)
    }
    const handleColorTwo = () => {
        setPlayAColor(true)
        console.log('someTcolor', someTcolor)
    }
    const handleColorThree = () => {
        setSomeTColor(true)
        console.log(someTcolor)
    }
    const handleColorFour = () => {
        setWildColor(true)
        console.log('wildcolor', wildcolor)
    }

    const [color, setColor] = useState('')

    const handleCatData = (value) => {
        console.log('handleCatData', value)
        handleColorThree()
        handleColorFour()
        localStorage.setItem("forgirlNav", JSON.stringify(value) ?? null)
        // setColor(true)
        // handleColorOne()
        // handleColorTwo()
        setColor(value)
        console.log('color', color)

    }

    return (
        <div>
            <div className="fg_nav">
                <div className="container">
                    {/* <div className="fg_navWrapper"> */}
                    <div className="row">
                        <div className="col-lg-12 fgnavs">
                            <ul className='fg_ul'>
                                <Link to="/cms" className="link">
                                    <li className="fgul_lis first_item"
                                        id={nvrcolor ? 'showUnderline' : 'hideUnderline'}
                                        onClick={(e) =>
                                            handleCatData(e.target.textContent)}>
                                        STATS</li>
                                </Link>
                                <Link to="/awards" className="link">
                                    <li className="fgul_lis brekar"
                                        id={playAcolor ? 'showUnderline' : 'hideUnderline'}
                                        onClick={(e) => handleCatData(e.target.textContent)}>
                                        <span style={{ marginLeft: '1rem' }}>AWARDS AND PRIZE MONEY</span>
                                    </li>
                                </Link>
                                <Link to="/cms" className="link">
                                    <li className="fgul_lis brekar"
                                        id={playAcolor ? 'showUnderline' : 'hideUnderline'}
                                        onClick={(e) => handleCatData(e.target.textContent)}>
                                        <span style={{ marginLeft: '1rem' }}>MOBILE PRODUCTIONS</span>
                                    </li>
                                </Link>
                                <Link to="/cms" className="link">
                                    <li className="fgul_lis brekar"
                                        id={someTcolor ? 'showUnderline' : 'hideUnderline'}
                                        onClick={(e) => handleCatData(e.target.textContent)}>
                                        <span style={{ marginLeft: '1rem' }}>PHOTOS</span>
                                    </li>
                                </Link>
                                <Link to="/cms" className="link">
                                    <li className="fgul_lis brekar"
                                        id={wildcolor ? 'showUnderline' : 'hideUnderline'}
                                        onClick={(e) => handleCatData(e.target.textContent)}>
                                        <span style={{ marginLeft: '1rem' }}>VENUES</span>
                                    </li>
                                </Link>
                                <Link to="/cms" className="link">
                                    <li className="fgul_lis brekar"
                                        id={wildcolor ? 'showUnderline' : 'hideUnderline'}
                                        onClick={(e) => handleCatData(e.target.textContent)}>
                                        <span style={{ marginLeft: '1rem' }}>FANTASY</span>
                                    </li>
                                </Link>
                                <Link to="/cms" className="link">
                                    <li className="fgul_lis brekar"
                                        id={wildcolor ? 'showUnderline' : 'hideUnderline'}
                                        onClick={(e) => handleCatData(e.target.textContent)}>
                                        <span style={{ marginLeft: '1rem' }}>FORGIRLS</span>
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default MoreNav