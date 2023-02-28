import React from 'react'
import Card from '../Card/Card'

const GridView = (props) => {
  return (
    <div className='container'>
      <div className="row">
        {
            props.newsList.map((news, index)=>(
              <div className="col-md-4" key={index}>
                <Card news={news}/>
              </div>
            ))
        }
      </div>
    </div>
  )
}

export default GridView