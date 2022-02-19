import React from 'react'
import Transparentbox from './Shared/Transparentbox'
import Background from '../images/background.jpg'
import { Link } from 'react-router-dom'

function LandingContent() {
    let Style = {
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }
    let text1 = 'coffee was first discovered by the 9th-century Ethiopian goat-herder Kaldi.'
    let text2 = 'Ethiopia is the 5th largest coffee-producing nation in the world, and the highest producing nation in Africa.'
    let text3 = 'Ethiopian coffees are heavy and winey or floral and tea like and Ethiopian coffee one can sense notes of jasmine flower, bergamot and blueberry in aftertaste'
  return (
    <div style={Style} className='h-screen'>
        <div className='flex justify-around h-2/3 text-center' >
            <Transparentbox text={text2}/>
            <Transparentbox text={text1}/>
            <Transparentbox text={text3}/>
        </div>
        <div className='flex justify-center -mt-8'>
            <button className='bg-hltText opacity-40 backdrop-blur-md p-3 text-lg rounded-md'><Link to="/funfacts">Go to Fun facts</Link></button>
        </div>
    </div>
  )
}

export default LandingContent