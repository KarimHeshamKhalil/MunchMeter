import React, { useState } from 'react'
import { GoPlus } from "react-icons/go";
import { FaFire, FaCircleExclamation } from "react-icons/fa6";
import { GiAppleSeeds } from "react-icons/gi";
import { IoIosWater } from "react-icons/io";

import ConsumeForm from './ConsumeForm';
import BurnForm from './BurnForm'
import { IoCloseOutline } from 'react-icons/io5';

export default function Sidebar({ setFoodLog, setActivityLog }) {
  const [isShown, setIsShown] = useState(false)
  const [isConsume, setIsConsume] = useState(false)
  const [isBurnCalories, setIsBurnCalories] = useState(false)

  const toggleModal = () => {
    setIsShown(prevVal => !prevVal)
    setIsBurnCalories(false)
    setIsConsume(false)
  }

  const handleOption = (option) => {
    
    if (option === 'consume') {
      setIsConsume(true)
    } else if (option === 'burnCalories') {
      setIsBurnCalories(true)
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
            <a href={'/home/calories'}>
              <button className='group w-full relative px-5 py-2 border-y border-green2 hover:bg-green2 text-green-100 overflow-hidden text-left transition-all duration-300 ease-in-out'>
                <span className='transform translate-x-0 group-hover:translate-x-[10%] transition-all duration-300 ease-in-out flex items-center gap-2'>Calories <FaFire /></span>
              </button>
            </a>
          </li>
          <li>
            <a href={'/home/micronutrients'}>
              <button className='group w-full relative px-5 py-2 border-y border-green2 hover:bg-green2 text-green-100 overflow-hidden text-left transition-all duration-300 ease-in-out'>
                <span className='transform translate-x-0 group-hover:translate-x-[10%] transition-all duration-300 ease-in-out flex items-center gap-2'>Micronutrients <GiAppleSeeds /></span>
              </button>
            </a>
          </li>
          <li>
            <a href={'/home/hydration'}>
              <button className='group w-full relative px-5 py-2 border-y border-green2 hover:bg-green2 text-green-100 overflow-hidden text-left transition-all duration-300 ease-in-out'>
                <span className='transform translate-x-0 group-hover:translate-x-[10%] transition-all duration-300 ease-in-out flex items-center gap-2'>Hydration <IoIosWater /></span>
              </button>
            </a>
          </li>
        </ul>
          
      </div>

      {
        isShown && !isBurnCalories && !isConsume && (
          <div className='fixed inset-0 w-[1000vh] height-[100vh] z-50'>
            <div onClick={toggleModal} className='fixed inset-0 w-[1000vh] height-[100vh] bg-modal z-100'></div>
            <div className='modal-content shadow-innerborder overflow-clip border border-green2 bg-slate-100 rounded-lg px-6  py-6'>
              <button onClick={toggleModal} className='absolute -top-1 -right-1 px-2 pr-3 py-2 pt-3 bg-green2 borer border-green2 text-white rounded-md hover:text-green2 hover:bg-slate-50 transition-all duration-100 shadow-shadow1'>
                <IoCloseOutline />
              </button>
              <h3 className='text-green1 font-medium text-xl mb-4'>Choose:</h3>

              <div className='grid grid-cols-3 gap-4'>
                <button onClick={() => handleOption('consume')} className='bg-yellow-500 text-white font-semibold text-right rounded-md background pt-7 pb-2 px-2 hover:rounded-none hover:shadow-shadow1 transition-all duration-200'>
                  Consume
                </button>
                <button onClick={() => handleOption('burnCalories')} className='bg-red-500 text-white font-semibold text-right rounded-md background pt-7 pb-2 px-2 hover:rounded-none hover:shadow-shadow1 transition-all duration-200'>
                  BurnCalories
                </button>
              </div>
            </div>
          </div>
        )
      }
      {
        isShown && isConsume && (
          <ConsumeForm setFoodLog={setFoodLog} toggleModal={toggleModal} />
        )
      }
      {
        isShown && isBurnCalories && (
          <BurnForm setActivityLog={setActivityLog} toggleModal={toggleModal} />
        )
      }
    </>
  )
}
