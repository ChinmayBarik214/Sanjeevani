import React from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className='grid'>
        <section className='info-left'>Section left</section>
        <canvas className='model'></canvas>
        <section className='info-right'>Section right</section>
        <footer className='footer'>
          <p className='space-bw'>
            <Link href="javascript:return false;" class="btn-push" style={{ color: 'gray' }}>Back</Link>
            <Link to='fwd' href="javascript:return false;" class="btn-push green">Next</Link>
          </p>
        </footer>
      </div>
    </>
  )
}

export default Home