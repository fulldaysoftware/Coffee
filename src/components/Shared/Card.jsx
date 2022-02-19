import React from 'react'

function Card({title, body} ) {
  return (
    <div className=' bg-hltText justify-center rounded-xl shadow-lg'>
            <p className='text-xl m-2 text-center font-bdText underline underline-offset-2 font-semibold text-bd-txt'>
                {title}
            </p>
            <p className='text-center m-2 px-2 font-bdText text-bd-txt'>
                {body}
            </p>
    </div>
  )
}

export default Card