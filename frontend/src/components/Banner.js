import React from 'react'
import bannerimg from './images/banner.jpg'

const Banner = ({item}) => {
  return (
    <div className='banner_container' style={{ backgroundImage: `url(${bannerimg})`}}>
      <div className="banner_container_text">{item}</div>
    </div>
  )
}

export default Banner
