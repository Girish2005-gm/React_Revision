import React from 'react'
import CompC from './CompC'

function CompB({data}) {
  return (
    <div className='border border-black p-2'>
       componant B
      <CompC data={data}/>
    </div>
  )
}

export default CompB
