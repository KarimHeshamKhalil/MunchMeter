'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { GoPlus } from "react-icons/go";
import { FaFire, FaCircleExclamation } from "react-icons/fa6";
import { GiAppleSeeds } from "react-icons/gi";
import { IoIosWater } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

export default function Sidebar() {
  const [isShown, setIsShown] = useState(false)
  const [name, setName] = useState('')
  const [grams, setGrams] = useState(0)
  const [caloriePerHundGram, setCaloriePerHundGram] = useState(0)
  const [isShowEmpty, setIsShowEmpty] = useState(false)

  const toggleModal = () => {
    setIsShown(prevVal => !prevVal)
  }

  const submit = () => {
    if (!name && grams !== 0 && caloriePerHundGram !== 0) {
      toggleModal()
    } else {
      setIsShowEmpty(true)
    }
  }

  return (
    <>
      <div className='absolute left-0 top-0 bottom-0 w-48 bg-green1'>
        <div className='px-5 pt-4 mb-6'>
          <button onClick={() => setIsShown(true)} className='text-black bg-white w-full py-2 text-lg flex items-center justify-center gap-1 rounded-md'>
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

      {
        isShown && (
          <div className='fixed inset-0 w-[1000vh] height-[100vh] z-50'>
            <div onClick={toggleModal} className='fixed inset-0 w-[1000vh] height-[100vh] bg-modal z-100'></div>
            <div className='modal-content shadow-innerborder overflow-clip border border-green2 bg-slate-100 rounded-lg px-6  py-6'>
              <button onClick={toggleModal} className='absolute -top-1 -right-1 px-2 pr-3 py-2 pt-3 bg-green2 borer border-green2 text-white rounded-md hover:text-green2 hover:bg-slate-50 transition-all duration-100 shadow-shadow1'>
                <IoCloseOutline />
              </button>
              <h3 className='text-2xl text-green2 mb-4'>Add Food</h3>

              <div className='text-green2 flex flex-col text-lg'>
                <label htmlFor="name">Name:</label>
                <input onChange={(e) => setName(e.currentTarget.text)} type="text" placeholder='ex:apple' className='text-green1 text-lg px-2 placeholder:text-green3 outline-green3 bg-stone-50 rounded-sm' />
                <div className='text-red-800 flex items-center gap-2'>
                  <FaCircleExclamation />
                  <span>
                    Name is required
                  </span>
                </div>
              </div>

              <div className='text-green2 flex flex-col text-lg my-2'>
                <label htmlFor="grams">Grams:</label>
                <input onChange={(e) => setGrams(e.currentTarget.text)} type="text" placeholder='ex:100g' className='text-green1 text-lg px-2 placeholder:text-green3 outline-green3 bg-stone-50 rounded-sm' />
              </div>

              <div className='text-green2 flex flex-col text-lg'>
                <label htmlFor="caloriesperhundredgrams">CaloriesPerHundredGrams:</label>
                <input onChange={(e) => setCaloriePerHundGram(e.currentTarget.text)} type="text" placeholder='ex:100cal/100gram' className='text-green1 text-lg px-2 placeholder:text-green3 outline-green3 bg-stone-50 rounded-sm' />
              </div>

              <div className='w-full flex items-center justify-center mt-4'>
                <button className='text-slate-50 bg-green2 px-8 py-1 text-lg rounded-md hover:text-green2 hover:bg-slate-50 transition-all duration-100 shadow-shadow1'>
                  Add
                </button>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}
