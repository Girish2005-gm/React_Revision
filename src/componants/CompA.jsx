import React from 'react'
import CompB from './CompB'

function CompA() {
 const data={
    username:"girish",
    age:20
 }
  return (
    <div className='border border-black p-10 bg-blue-100'>
    <h1 className='font-semibold'>Componant A</h1>
     <CompB data={data}/>
    </div>
  )
}

export default CompA
