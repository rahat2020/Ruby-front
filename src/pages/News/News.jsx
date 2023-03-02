import React, { useState, useEffect } from 'react';
import Headers from '../../components/Headers/Headers';
import './News.css';
import news from '../../assets/caro_one.jpg'
import Footer from '../../components/Footer/Footer';



const News = () => {
    const [newurl, setNewurl] = useState([])

    console.log(newurl)

    const newsList = [
        { url: 'https://images.unsplash.com/photo-1525436519918-5671ec6c6b50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1298&q=80' },
        { url: 'https://images.unsplash.com/photo-1542852869-ecc293ff89c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' },
        { url: 'https://images.unsplash.com/photo-1535506349729-56e253fac2b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1296&q=80' },
        { url: 'https://images.unsplash.com/photo-1526841234980-b3c3645c92a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1346&q=80' }
    ]
    useEffect(() => {
        setNewurl(newsList)
    }, [])

    return (
        <>
            <Headers />
            <div className="container news">


                <div className='bg-white mb-4'>
                    <div className="row">


                        {
                            newurl.map((item, index) => (
                                <div className="col-md-4 mb-4">
                                    <div className="card" key={index}>
                                        <div className="cardImg_container">
                                            <img src={item.url} className="card_img" alt="..." />
                                        </div>
                                        <div className="card_body">
                                            <h2 className="card_text">FA WOMEN'S CONTINENTAL TYRES LEAGUE CUP FINAL 2023</h2>
                                            <p className="card_para">Heading to Sunday's FA Women's Continental Tyres Cup Final on Sunday? Find out all you need to know with our fan guide</p>
                                        </div>
                                        <div className="card_btnConainer">
                                            <button className='card_btn'>
                                                <span className="cardbtn_text">
                                                    FIND OUT MORE
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default News