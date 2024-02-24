import React from 'react'
import HomeIcon from "../../assets/images/sidebar/home.svg"
import PodcastIcon from "../../assets/images/sidebar/podcast.svg"
import SettingIcon from "../../assets/images/sidebar/setting.svg"
import PlaylistIcon from "../../assets/images/sidebar/playlist.svg"

const SideBar = ({showSideBar, handleOnClose}) => {
    console.log(showSideBar);
  return (
     <div id="container" onClick={handleOnClose} className={showSideBar === true ? "fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50 lg:static lg: bg-none lg:bg-opacity-0": 'hidden'}>
        <div className={ showSideBar === true ? ' w-[210px] bg-[#3B3B3B] px-6 py-10 absolute z-50 top-0 left-0 min-h-screen' : 'hidden'}>
        <div className=' flex justify-start items-center gap-2'>
           
            <img className=''src={PodcastIcon}/>

            <p className=' text-2xl font-bold text-white main_title'>Fauget</p>
        </div>
        <div className=' mt-6 flex flex-col justify-between gap-[100px]'>
        <div className=''>
            <div className=' flex justify-between items-center'>
            <p className=' text-white'>Menu</p>
            <hr className=' w-[70px] h-1 mt-2'/>
            </div>
            <div>
                <ul className=' text-white mt-5 ml-2 flex flex-col gap-2'>
                    <li className='flex gap-2'> <img src={HomeIcon}/>Home</li>
                    <li className='flex gap-2'><img src={PodcastIcon}/>Podcast</li>
                    <li className='flex gap-2'><img src={SettingIcon}/>Settings</li>
                </ul>
            </div>
        </div>
        <div className=''>
        <div className=' flex justify-between items-center'>
            <p className=' text-white'>My Playlist</p>
            <hr className=' w-[70px] h-1 mt-2'/>
            </div>
            <div>
                <ul className=' text-white mt-5 ml-2 flex flex-col gap-2'>
                    <li className='flex gap-2'> <img src={PlaylistIcon}/>Playlist #A</li>
                    <li className='flex gap-2'><img src={PlaylistIcon}/>Playlist #B</li>
                    <li className='flex gap-2'><img src={PlaylistIcon}/>Playlist #C</li>
                    <li className='flex gap-2'><img src={PlaylistIcon}/>Add New +</li>
                </ul>
            </div>
        </div>
        </div>
        
        
    </div>
     </div>
    
  )
}

export default SideBar