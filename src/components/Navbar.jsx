import React from 'react'

function Navbar() {

  return (
    <nav className='flex justify-around bg-cfbg '>
        <h1 className='font-titleText text-5xl text-hltText self-center p-5'>Coffee</h1>
        <ul className='flex items-center'>
            <li className='font-bdText text-hltText font-semibold'>Home</li>
            <li className='mx-7 font-bdText text-hltText font-semibold'>Fun-facts</li>
            <li className='font-bdText text-hltText font-semibold'>About</li>
        </ul>
    </nav>
  )
}

export default Navbar