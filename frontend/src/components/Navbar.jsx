import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { use } from 'react'

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu,setShowMenu] = useState(false);
    const [token,setToken] = useState(true);
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        <img className='w-44 cursor-pointer' src={assets.logo} alt="" />
        <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
                    <li className='py-1 text-green-900' >HOME</li>
                    <hr className='border-nome outlin-non h-0.5 bg-red-700 w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='/doctors'>
                    <li className='py-1 text-green-900'>ALL DOCTORS</li>
                    <hr className='border-nome outlin-non h-0.5 bg-red-700 w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='/about'>
                    <li className='py-1 text-green-900'>ABOUT</li>
                    <hr className='border-nome outlin-non h-0.5 bg-red-700 w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='/contact'>
                    <li className='py-1 text-green-900'>CONTACT</li>
                    <hr className='border-nome outlin-non h-0.5 bg-red-700 w-3/5 m-auto hidden' />
                </NavLink>
        </ul>
        <div className='flex items-center gap-2'>
            {
                token
                ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                    <img className='w-16 rounded-full border-2 border-red-600' src={assets.profile_pic} alt="" />
                    <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                    <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                        <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                        <p onClick={() => navigate('my-profile')} className='hover:text-red-600 cursor-pointer'>My Profile</p>
                        <p onClick={() => navigate('my-appointments')} className='hover:text-red-600 cursor-pointer'>My Appointments</p>
                        <p onClick={()=> setToken(false)} className='hover:text-red-600 cursor-pointer'>Logout</p>         
                        </div>
                    </div>
                </div>
                : <button onClick={() => navigate('/login')} className='bg-red-600 text-white px-8 py-3 rounded-full font-light hidden md:block'>Create account</button>

            }
        </div>
    </div>
  )
}

export default Navbar