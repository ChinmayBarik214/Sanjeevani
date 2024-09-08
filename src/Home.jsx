import React from 'react'
import './Home.scss'

function Home() {
  return (
    <>
      <div className='grid'>
        <section className='info-left'>Section left</section>
        <canvas className='model'></canvas>
        <section className='info-right'>Section right</section>
        <footer className='footer'>Footer</footer>
      </div>
    </>
  )
}

export default Home