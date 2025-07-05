import React, { useContext } from 'react'
import UserContext from '../utills/UserContext'

function CompC() {
    const data= useContext(UserContext)
  return (
    <div className='border border-black p-3'>
       <ol>
        <li>{data.username}</li>
        <li>{data.age}</li>
       </ol>
    </div>
  )
}

export default CompC
