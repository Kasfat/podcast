import React from 'react'
import MusicItem from '../MusicItem/MusicItem'

const MainBody = () => {
  return (
    <div className='mt-6 flex flex-1 gap-4'>
        <MusicItem/>
        <MusicItem/>
        <MusicItem/>
        <MusicItem/>
        <MusicItem/>
    </div>
  )
}

export default MainBody