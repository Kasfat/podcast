import React from 'react'
import MusicItem from '../MusicItem/MusicItem'

const MainBody = ({data}) => {
 console.log(data)
  return (
    <div className='mt-6 grid grid-cols-5 gap-4'>
      {data.map((value,index)=>{
        return <MusicItem key={index} name ={value.artist.name} picture={value.artist.picture_big} />
      })}
    
        
        
        

    </div>
  )
}

export default MainBody