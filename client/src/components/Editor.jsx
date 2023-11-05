import React, { useEffect, useRef } from 'react'
import '../editorPage.css'
import { Link } from 'react-router-dom'
const Editor = () => {
  const exit=()=>{
    alert('You are Exiting the discussion')
  }
  return (
    <div className='editorpage'>
        <h1>You are collabing right now</h1>
        <textarea/>
        <Link to={'/'}><button onClick={exit}>Exit</button></Link>
    </div>
  )
}

export default Editor