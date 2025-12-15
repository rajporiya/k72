import React from 'react'
import Vedio from '../Componant/Home/vedio'
import HomeHeroText from '../Componant/Home/HomeHeroText'

const Home = () => {
  return (
    <>
        <div className='h-screen w-screen fix'>
            <Vedio></Vedio> 
        </div>

        <div className='h-screen w-screen relative flex flex-col'>
          <HomeHeroText />
        </div>
    </>
  )
}

export default Home
