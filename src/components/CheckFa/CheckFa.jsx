import React from 'react';
import './CheckFa.css';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


const CheckFa = () => {
    return (
        <div className='checkFa mb-5 pb-5'>
            <div className="conatainer">
                <div className="row">
                    <div className="col-md-6">
                        <div className="checkLeft">
                            <div className="clbox">
                                <h3 className="checkleft_title">CHECK OUT THE FA</h3>
                                <span className="check_para">Get the latest news on everything football</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="checkRight">
                            <button className="checkBtn">
                                GO TO THE FA
                               <span className='checbtn_rghtArrow'> <ArrowRightIcon/></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckFa