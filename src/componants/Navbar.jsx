import React from 'react'

function Navbar() {
    return (
        <div className='flex flex-row justify-between h-16 items-center  shadow-md w-full'>
            <h2 className='m-9 bg-indigo-200 py-3 px-10 rounded-md text-lg font-bold'>JinuStore</h2>
            <ul className='flex gap-3 mx-7'>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Cart</li>
            </ul>
        </div>
    )
}

export default Navbar
