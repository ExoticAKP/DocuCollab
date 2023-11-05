import React from 'react'
import { Link } from 'react-router-dom'
import '../style.css'
const Home = () => {
  const createAlert=()=>{
    alert('Entering the Discussion. Please Click Ok')
  }
  return (
    <div className='entry'>
      <h1>DocuCollab</h1>
      <Link to={'/editor'}>
      <button className='btn' onClick={createAlert}>Enter Collab →</button>
      </Link>
      
    </div>
  )
}

export default Home