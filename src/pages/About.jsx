import React from 'react'
import Background from "../images/about.jpg"

function About() {
  let Style = {
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
}

  return (
    <div className='h-screen flex flex-row justify-center items-center' style={Style}>
            <div className='w-2/4 bg-hltText rounded-tl-3xl rounded-bl-3xl grid grid-cols-3'>
              <div className='rounded-full'>
                <img src='https://avatars.githubusercontent.com/u/71323963?v=4' alt='avater' className=' -ml-10 rounded-full w-32'></img>  
              </div>
              <div className='-scroll-ml-12 col-span-2'>
              <p className='text-lg underline font-bdText font-bold text-bd-txt text-center'>Developer Information</p>
              <p className='text-lg font-bdText  text-bd-txt text-center'>Muluken Negash</p>
              <p className='text-lg font-bdText  text-bd-txt text-center'>mulukennegash18@gmail.com</p>
              <p className='text-lg font-bdText  text-bd-txt text-center'><a href='https://github.com/fulldaysoftware' rel="noreferrer" target="_blank">fulldaysoftware</a></p>
              </div>
            </div>
      </div>

  )
}
export default About