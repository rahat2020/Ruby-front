import React, { useEffect } from 'react'
import Headers from '../../../components/Headers/Headers'
import DraftNav from '../DraftNav/DraftNav';

const Domestic = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    }, [])
    return (
        <>
            <Headers />
            <DraftNav/>
            <div className="dmstic mt-3 mb-3">
                <div className="container">

                    <div className="p">
                        <div className="table-responsive">
                            <table className="table table-striped border">
                                <thead className="bg-primary text-white ">
                                    <tr>
                                        <th scope="col">SN</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Tier</th>
                                        <th scope="col">Number</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    <tr >
                                        <th scope="row" className='border-end'>1</th>
                                        <td className='border-end'>National Team</td>
                                        <td className='border-end'>A</td>
                                        <td className='border-end'>3</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className='border-end'>2</th>
                                        <td className='border-end'>National Team</td>
                                        <td className='border-end'>B</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className='border-end'>3</th>
                                        <td className='border-end'>National Team Under 20</td>
                                        <td className='border-end'>C</td>
                                        <td className='border-end'>2</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className='border-end'>3</th>
                                        <td className='border-end'>National Team Under 17</td>
                                        <td className='border-end'>C</td>
                                        <td className='border-end'>2</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className='border-end'>3</th>
                                        <td className='border-end'>BKSP</td>
                                        <td className='border-end'>D</td>
                                        <td className='border-end'>1</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-start flex-column">
                        <h4 className='fw-bold link'>Local Players</h4>
                        <p className="text-start fw-normal text-capitalize">✦ EACH TEAM CAN PICK MAXIMUM 3 PLAYERS FROM TIER A ON LOTTERY SYSTEM. TOP 12 PLAYERS WILL BE IN THE TIER A LIST</p>
                        <p className="text-start fw-normal text-capitalize">✦ EACH TEAM CAN ICK MAXIMUM 3 PLAYERS FROM TIER B ON LOTTERY SYSTEM. TOP 36 PLAYERS (EXCEPT TIRE A) WILL BE IN THE TIER B LIST</p>
                        <p className="text-start fw-normal text-capitalize">✦ EACH TEAM CAN PICK MAXIMUM 4 PLAYERS FROM TIER C ON LOTTERY SYSTEM. TOP 36 PLAYERS (EXCEPT TIRE A & B) WILL BE IN THE TIER C LIST</p>
                        <p className="text-start fw-normal text-capitalize">✦ EACH TEAM CAN PICK MAXIMUM 3 PLAYERS FROM TIER D ON LOTTERY SYSTEM. TOP 12 PLAYERS (EXCEPT TIRE A, B & C) WILL BE IN THE TIER D LIST</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Domestic