import React from 'react'
import Video from '../componants/home/Video'
import HomeHero from '../componants/home/HomeHero'
import HomeBottum from '../componants/home/HomeBottum'

const Home = () => {
  return (
    <div>
        <div className='h-screen w-screen bg-red-900 fixed'>
            <Video />
        </div>
        <div className='justify-between h-screen w-screen relative flex flex-col'>
            <HomeHero />
            <HomeBottum />

        </div>
    </div>
  )
}

export default Home
