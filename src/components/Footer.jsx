import React from 'react'

function Footer() {
    const today = new Date() 
  return (
    <div className='bg-cfbg h-28 text-center'>
        <p className='text-hltText font-bdText pt-3'>Copyright Reserved &copy; {today.getFullYear()}</p>
        <p className='text-hltText font-bdText'>Developed By: <a href='https://github.com/fulldaysoftware' target='_blank'>fulldaysoftware</a></p>
    </div>
  )
}

export default Footer