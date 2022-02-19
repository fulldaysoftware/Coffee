import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {

  return (
    <nav className='flex justify-around bg-cfbg '>
        <h1 className='font-titleText text-5xl text-hltText self-center p-5'><Link to='/'>Coffee</Link></h1>
        <ul className='flex items-center'>
            <li className='font-bdText text-hltText font-semibold'><Link to='/'>Home</Link></li>
            <li className='mx-7 font-bdText text-hltText font-semibold'><Link to='/funfacts'>Fun-facts</Link></li>
            <li className='font-bdText text-hltText font-semibold'><Link to='/about'>About</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar