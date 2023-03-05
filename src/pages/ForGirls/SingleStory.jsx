import React, { useEffect, useState } from 'react';
// import ni from '../../../assets/newsimage.jpg';
// import ci from '../../../assets/caro_one.jpg';
// import ci2 from '../../../assets/caro_two.jpg';
// import Footer from '../../../components/Footer/Footer';
// import CheckFa from "../../../components/CheckFa/CheckFa";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
import Headers from '../../components/Headers/Headers';
import CheckFa from '../../components/CheckFa/CheckFa';
import Footer from '../../components/Footer/Footer';

const SingleStory = () => {
    const { id } = useParams()
    // console.log(id)

    // FETCH SINGLE DATA WITH ID FROM DATABASE
    const [data, setData] = useState([])
    console.log('singleStrydata', data)


    useEffect(() => {
        const newsData = async () => {
            const data = new FormData();
            data.append('Process', "see_one_FA");
            data.append('spacific_news_id', id);
            console.log('specific_news', data.append('spacific_news_id', id));
            const res = await axios.post('https://h.earnvest.xyz/FA/find_all_FA/', data);
            console.log(res.data);
            setData(res.data);
        }
        newsData()
    }, [])

    // FETCH TRENDING NEWS DATA
    // const [tdata, setTData] = useState([])
    // console.log('tdata', tdata)
    // useEffect(() => {
    //     const newsData = async () => {
    //         const data = new FormData();
    //         data.append('Process', "see_one_FA");
    //         data.append('spacific_news_id', id);
    //         console.log('spacific_news_id', data.append('Process', "see_all_news"));
    //         const res = await axios.post('https://h.earnvest.xyz/FA/find_all_FA/', data);
    //         console.log(res.data);
    //         setTData(res.data);
    //     }
    //     newsData()
    // }, [])

    const handleReload = () => {
        window.location.reload();
    }
    return (
        <>
            <Headers />
            <div className="container mt-5 mb-5">
                <img src={`https://h.earnvest.xyz` + data.photo} alt="team-logo" style={{ width: '100%' }} />
                <h2 className='news-title'>{data.title}</h2>
                <h4 className='news-subtitle'>{data.subtitle}</h4>

                <div className='article-body'>
                    {data ? data.Description : 'Artcile is not created properly' }
                </div>

                <div className='trending'>
                    <h2 className='news-title'>Trending</h2>
                    <div className='container'>
                        <div className='bg-white mb-5'>

                            <div className='row'>

                                {/* {
                                    data.slice(0, 3).map((item, i) => (
                                        <div className='col-md-4' key={i}>
                                            <div className='card bg-white mb-4'>
                                                <div className="card">
                                                    <div className="cardImg_container">
                                                        <img src={`https://h.earnvest.xyz` + item.photo} className="card_img" alt="trending-news" />
                                                    </div>
                                                    <div className="card_body">
                                                        <h2 className="card_text">{item.title}</h2>
                                                        <p className="card_para">{item.Description.slice(0, 20)}</p>
                                                    </div>
                                                    <div className="card_btnConainer">
                                                        <Link to={`/single-news/${item.id}`} >
                                                            <button className='card_btn' onClick={handleReload}>
                                                                <span className="cardbtn_text">
                                                                    FIND OUT MORE
                                                                </span>
                                                            </button>
                                                        </Link>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                } */}

                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <CheckFa />
            <Footer />
        </>
    )
}

export default SingleStory

