import React from 'react';
import './CheckFa.css';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from 'react-router-dom';


const CheckFa = () => {
    return (
        <div className='checkFa mb-5 pb-5'>
            <div className="conatainer">
                <div className="row checkFa_row">
                    <div className="col-md-6">
                        <div className="checkLeft">
                            <div className="clbox">
                                <h3 className="checkleft_title text-uppercase">CHECK OUT THE BFF</h3>
                                <span className="check_para">Get the latest news on everything football</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="checkRight">
                            <Link to="https://www.bff.com.bd/" target="_blank">
                                <button className="checkBtn text-upppercase">
                                    GO TO THE BFF
                                    <span className='checbtn_rghtArrow'> <ArrowRightIcon /></span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckFa