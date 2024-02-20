import React from 'react'
import Img1 from '../../assets/images/musiclist/img1.jpg'
import StartIcon from '../../assets/starticon.svg'

const MusicItem = () => {
  return (
    <div className='relative'>
        <img style={{borderRadius:'30px'}} className='' src={Img1}/>
        <img className=' absolute top-6 left-16' src={StartIcon}/>
        <p className='text-white text-center mt-2 font-semibold'>Music</p>
    </div>
  )
}

export default MusicItem