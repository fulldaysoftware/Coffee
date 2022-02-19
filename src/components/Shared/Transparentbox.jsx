import React from 'react'

function Transparentbox({text}) {

  return (
    <div className='flex bg-hltText items-center text-bd-txt font-bdText text-xl opacity-40 backdrop-blur-md h-3/4 mt-14 w-1/5 rounded-2xl'>
        {text}
    </div>
  )
}

export default Transparentbox