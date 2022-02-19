import React, { useContext } from 'react'
import Card from '../components/Shared/Card'
import { funFactContext } from '../contexts/FunfactContextProvider'

function FunFacts() {
  const {facts} = useContext(funFactContext)
  return (
    <div className='bg-cfbg grid grid-cols-2 gap-4'>
      {
        facts.map((fact, index)=>{
          return <Card key={index} title={fact.title}body={fact.body}/>
        })
      }
    </div>
  )
}

export default FunFacts