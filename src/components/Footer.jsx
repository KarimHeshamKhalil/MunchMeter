import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";

export default function Footer() {
  return (
    <div className='w-full h-[300px] bg-slate-100 px-12 py-6 text-green1 flex items-center justify-between'>
      <div>
        <h3 className='text-3xl rubik'>MunchMeter</h3>

        <span className='text-xl block mt-4 mb-1 font-medium rubik '>Contact Us</span>
        <ul className='text-lg px-4'>
          <li className='flex items-center gap-2'>
            <FaFacebook />
            <a className='hover:underline rubik' href="#">Facebook</a>
          </li>
          <li className='flex items-center gap-2 text-xl relative -left-[1px]'>
            <RiInstagramFill />
            <a className='hover:underline rubik text-lg' href="#">Instagram</a>
          </li>
          <li className='flex items-center gap-2 text-xl'>
            <AiFillTwitterCircle />
            <a className='hover:underline rubik text-lg' href="#">Twitter X</a>
          </li>
        </ul>
      </div>

      <div className='-mb-[32px]'>
        <span className='text-xl block mt-4 mb-1 font-medium rubik '>Authors</span>
        <ul className='text-xl px-4'>
          <li className='flex items-center gap-2'>
            {/* <FaFacebook /> */}
            <a className='hover:underline rubik' href="#">Moaaz</a>
          </li>
          <li className='flex items-center gap-2 text-xl relative -left-[1px]'>
            {/* <RiInstagramFill /> */}
            <a className='hover:underline rubik text-lg' href="#">Mohamed</a>
          </li>
          <li className='flex items-center gap-2 text-xl'>
            {/* <AiFillTwitterCircle /> */}
            <a className='hover:underline rubik text-lg' href="#">Karim</a>
          </li>
        </ul>
      </div>

      <div>
        <label className='block text-xl font-medium' htmlFor="newsletter">Subscribe to our Newsletter</label>
        <div className='relative h-[40px]'>
          <input className='w-[500px] bg-white1 h-full px-4 py-1 text-lg rounded-full outline-none focus:shadow-md transition-all duration-100' type="text" placeholder='ex:john@example.com' />
          <button className='bg-yellow-500 text-white px-4 py-2 rounded-full h-full absolute right-0'>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}
