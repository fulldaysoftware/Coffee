import React, {createContext, useState} from 'react'
import Data from '../data/facts.json'
export const funFactContext = createContext()


function FunfactContextProvider({children}) {
    const [facts, setFacts] = useState(Data)
  return (
   <funFactContext.Provider value={{facts}}>
       {children}
   </funFactContext.Provider>
  )
}

export default FunfactContextProvider
