import React from 'react'
import img from '../assets/photo_2023-04-14_23-16-08 (2).jpg'

const Main = () => {
  return (
  <><div className='main-part'>
    <div className='name'>
      <h1>Shamil Kalmatov</h1>
      <h2>Personal Website</h2>
    </div>
      <img src={img}></img>
    </div><div className='main-intro'>
        <p>Hi! My name is Shamil Kalmatov</p>
        <p>I am a current computer science student at American University in Washington DC</p>
      </div>
    </>
  )
}

export default Main