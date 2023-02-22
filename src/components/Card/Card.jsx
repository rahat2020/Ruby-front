import React from 'react'

const Card = ({news}) => {
  return (
    <div className='card p-2 m-2 bg-white mx-320 rounded-sm border border-gray'>
        <img className='scale-100 hover:scale-105 ease-in duration-200 border-b-4 border-black' src={news.url}/>
        <div className='m-2'>
            <h2 className='font-bold text-3xl'>Title</h2>
            <p className='m-2'>Subtitle</p>
            <a className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 m-2 border-2'>FIND OUT MORE</a>
        </div>
    </div>
  )
}

export default Card