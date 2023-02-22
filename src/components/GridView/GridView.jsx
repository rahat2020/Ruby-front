import React from 'react'
import Card from '../Card/Card'

const GridView = (props) => {
  return (
    <div className='container mx-auto grid grid-cols-3'>
        {
            props.newsList.map(news=>(
                <Card news={news}/>
            ))
        }
    </div>
  )
}

export default GridView