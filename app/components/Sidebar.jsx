import Link from 'next/link';
import React from 'react'
import { GoPlus } from "react-icons/go";
import { FaFire } from "react-icons/fa6";
import { GiAppleSeeds } from "react-icons/gi";
import { IoIosWater } from "react-icons/io";

export default function Sidebar() {
  return (
    <div className='absolute left-0 top-0 bottom-0 w-48 bg-green1'>
      <div className='px-5 pt-4 mb-6'>
        <button className='text-black bg-white w-full py-2 text-lg flex items-center justify-center gap-1 rounded-md'>
          <span className='text-2xl'><GoPlus /></span> New
        </button>
      </div>

      <ul className='text-white'>
        <li>
          <Link href={'/home/calories'}>
            <button className='group w-full relative px-5 py-2 border-y border-green2 hover:bg-green2 text-green-100 overflow-hidden text-left transition-all duration-300 ease-in-out'>
              <span className='transform translate-x-0 group-hover:translate-x-[10%] transition-all duration-300 ease-in-out flex items-center gap-2'>Calories <FaFire /></span>
            </button>
          </Link>
        </li>
        <li>
          <Link href={'/home/micronutrients'}>
            <button className='group w-full relative px-5 py-2 border-y border-green2 hover:bg-green2 text-green-100 overflow-hidden text-left transition-all duration-300 ease-in-out'>
              <span className='transform translate-x-0 group-hover:translate-x-[10%] transition-all duration-300 ease-in-out flex items-center gap-2'>Micronutrients <GiAppleSeeds /></span>
            </button>
          </Link>
        </li>
        <li>
          <Link href={'/home/hydration'}>
            <button className='group w-full relative px-5 py-2 border-y border-green2 hover:bg-green2 text-green-100 overflow-hidden text-left transition-all duration-300 ease-in-out'>
              <span className='transform translate-x-0 group-hover:translate-x-[10%] transition-all duration-300 ease-in-out flex items-center gap-2'>Hydration <IoIosWater /></span>
            </button>
          </Link>
        </li>
      </ul>
        
    </div>
  )
}
