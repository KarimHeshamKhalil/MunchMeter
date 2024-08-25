import React from 'react'
import { GiWatermelon } from "react-icons/gi";

export default function Navbar() {
  return (
    <nav className='px-8 py-2 fixed top-0 left-0 z-[1000] bg-white shadow-sm w-full flex items-center justify-between'>
      <div className='text-green2 flex items-center gap-2'>
        <GiWatermelon className='text-2xl' />
        <h2 className='text-xl rubik'>MunchMeter</h2>
      </div>

      <ul className='flex items-center gap-2'>
        <li>
          <a href="/home/calories">
            <button className=' bg-green2 px-6 py-2 rounded-sm text-white hover:bg-white hover:text-green2 hover:shadow-shadow1 transition-all duration-200'>App</button>
          </a>
        </li>
      </ul>
    </nav>
  )
}
