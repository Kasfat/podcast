import React from 'react'
import Img1 from '../../assets/images/musiclist/img1.jpg'
import StartIcon from '../../assets/starticon.svg'

const MusicItem = ({name,picture}) => {
  
  return (
    <div className='relative'>
        <img style={{borderRadius:'30px'}} className='' src={picture}/>
        <div className='absolute bottom-8 inset-0 flex justify-center items-center '><img className='' src={StartIcon}/></div>
        <p className='text-white text-center mt-2 font-semibold'>{name}</p>
    </div>
  )
}

export default MusicItem