import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function Navbar() {
    const [mode, setmode] = useState("Light");
    const cartItems=useSelector((store)=>store.cart.cartItems)
    function HandleMode() {
        mode === "Light" ? setmode("dark") : setmode("Light");
    }
    return (
        <div className='flex flex-row justify-between h-16 items-center  shadow-md w-full'>
            <h2 className='m-9 bg-indigo-200 py-3 px-10 rounded-md text-lg font-bold'>Store</h2>
            <div className='flex mx-3 items-center justify-center'>
                <ul className='flex gap-3 mx-7'>
                    <Link to={"/"}><li>Home</li></Link>
                    <Link to={"/men"}><li>Men</li></Link>
                    <Link to={"/cart"}><li>cart{cartItems.length}</li></Link>
                    <Link to={"/kids"}><li>Kids</li></Link>
                    <Link to={"/Forlearn"}><li>Learn</li></Link>
                </ul>
                <button onClick={HandleMode} className='bg-green-300 px-3 rounded-sm py-1'>{mode}</button>
            </div>
        </div>
    )
}

export default Navbar
