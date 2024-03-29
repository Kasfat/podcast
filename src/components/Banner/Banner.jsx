import React from 'react'
import BannerImage from '../../assets/images/banner/banner_1.png'
import Button from '../Button/Button'

const Banner = () => {
  return (
    <div className=' relative mt-6'>
        <img src={BannerImage} alt="Banner" className="w-full h-[500px] md:h-[350px] lg:h-[320px]" />
        <div className="absolute flex justify-center items-center top-0 left-0 w-full h-full bg-gradient-to-r from-[#007182] from-18.4%">
            <div className='px-8 flex flex-col gap-4'>
                <p className='text-white text-[16px] sm:text-lg'>Top play music station</p>
                <p className='text-white text-[24px] sm:text-4xl'>The Dark Side of Music: Unveiling Its Negative Effects</p>
                <p className='text-white text-[16px] sm:text-lg'>Music, often regarded as a universal language, possesses a profound impact on individuals and societies alike. While it has long been celebrated for its ability to evoke emotions, foster connections, and uplift spirits, the flip side of the melody reveals a spectrum of adverse effects that are often overlooked</p>
                <Button style={{width:'200px'}} color='dark'>For You?</Button>
            </div>
        </div>
    </div>
  )
}

export default Banner