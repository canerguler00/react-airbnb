import React from 'react'


function Hero() {
  return (
    <div className='section-hero'>
        <img className='hero-photo' src={"https://images.unsplash.com/photo-1590930298432-4567af25e674?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"} alt="p102"/>
        <h1 className='hero-header'>Online Experiences</h1>
        <p className='hero-text'>Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
    </div>
  )
}

export default Hero;