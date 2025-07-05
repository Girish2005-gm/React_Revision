import React from 'react'
import ListItem from './ListItem'

function Acoordien({ title, open, setopen }) {
  return (
    <div className='my-1 w-64 shadow-md border border-gray-200 p-3 rounded-lg'>
      <div className='flex justify-between items-center'>
        <h1 className='font-bold'>{title}</h1>
        <button
          onClick={setopen}
          className='bg-black text-white px-2 rounded-md'
        >
          {open ? 'hide' : 'show'}
        </button>
      </div>
      {open && <ListItem />}
    </div>
  );
}

export default Acoordien;
