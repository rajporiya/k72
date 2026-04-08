import React from 'react'
import Video from './Video'

const HomeHero = () => {
  return (
    <div className="text-[15vh] font-[font1] text-center leading-[19vh]">
  <div>The spark for</div>

  <div className="flex justify-center items-center gap-4">
    <span>all</span>

    <div className="w-[18vw] h-[8vw] rounded-full overflow-hidden flex items-center justify-center">
      <Video />
    </div>

    <span>things</span>
  </div>

  <div>creative</div>
</div>
  )
}

export default HomeHero
 