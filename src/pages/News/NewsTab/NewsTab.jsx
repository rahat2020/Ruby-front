import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ForgirlsNav = () => {
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
                                <Link to="/never-played" className="link">
                                    <li className="fgul_lis first_item"
                                        id={nvrcolor ? 'showUnderline' : 'hideUnderline'}
                                        onClick={(e) =>
                                            handleCatData(e.target.textContent)}>
                                        NEVER PLAYED</li>
                                </Link>
                                <Link to="/play-sometimes" className="link">
                                    <li className="fgul_lis brekar"
                                        id={playAcolor ? 'showUnderline' : 'hideUnderline'}
                                        onClick={(e) => handleCatData(e.target.textContent)}>
                                        <span style={{ marginLeft: '1rem' }}>PLAY SOMETIMES</span>
                                        PLAY SOMETIMES</li>
                                </Link>
                                <Link to="/play-alot" className="link">
                                    <li className="fgul_lis brekar"
                                        id={someTcolor ? 'showUnderline' : 'hideUnderline'}
                                        onClick={(e) => handleCatData(e.target.textContent)}>
                                        <span style={{ marginLeft: '1rem' }}> PLAY A LOT</span>
                                    </li>
                                </Link>
                                <Link to="/wildcats" className="link">
                                    <li className="fgul_lis brekar"
                                        id={wildcolor ? 'showUnderline' : 'hideUnderline'}
                                        onClick={(e) => handleCatData(e.target.textContent)}>
                                        <span style={{ marginLeft: '1rem' }}>WILDCATS</span>
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
export default ForgirlsNav