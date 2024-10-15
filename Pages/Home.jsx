import React from 'react'

import Video from '../components/Video'
import HomeCar from '../components/HomeCar'

function Home() {
  return (
    <div>
      <Video />
      <HomeCar isHome={true} />
    </div>
  )
}

export default Home