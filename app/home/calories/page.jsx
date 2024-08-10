'use client'
import Sidebar from '@/app/components/Sidebar'
import React, { useState } from 'react'
import CircularProgressBar from '@/app/components/CircularProgressBar';
import { IoCloseOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { FaBookOpen } from "react-icons/fa";

export default function page() {
  
  const foodLog = [
    {
      name: 'apple',
      grams: 300,
      caloriePerHundGram: 100
    },
    {
      name: 'Custom',
      grams: 200,
      caloriePerHundGram: 400
    }
  ]

  return (
    <div className='pl-[160px] z-10'>
      <Sidebar />

      <main className='flex flex-col max-w-4xl mx-auto mt-10'>
        <div className='bg-slate-50 shadow-md px-6 py-4 rounded-2xl flex items-center gap-8'>
          <div className='relative'>
            <CircularProgressBar size={200} progress={10} />

            <div className='absolute inset-[25%] flex flex-col items-center justify-center'>
              <span className='text-green2 text-3xl'>1000/</span>
              <span className='italic font-semibold relative left-4 text-green2 text-xl'>2000</span>
            </div>
          </div>

          <div className='flex flex-col'>
            <p className='text-3xl flex items-center gap-4 text-green-900 font-semibold'>
              <span className='text-6xl text-green-900 italic'>1000</span> <span>Calories burned!!!</span>
            </p>

            <p className='text-xl text-center flex items-center justify-center gap-4 text-green-900 font-'>
              We are proud of you!
            </p>
          </div>
        </div>
        

        <div className='table mt-8'>
          <h3 className='text-xl px-2 mb-2 text-green1 flex items-center gap-2'>
            <span>Food Log</span>
            <FaBookOpen />
          </h3>

          <div className='bg-slate-50 px-4 py-2 rounded-md bg-green'>
            <table className='w-full'>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Grams</th>
                  <th>Calories/100Grams</th>
                  <th>total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {
                  foodLog.map((item, index) => (
                    <tr key={index}>
                      <td>{index}</td>
                      <td>{item.name}</td>
                      <td>{item.grams}g</td>
                      <td>{item.caloriePerHundGram}cal</td>
                      <td>{item.grams / 100 * item.caloriePerHundGram}cal</td>
                      <td className='flex items-center'>
                        <button className='px-2 py-1 bg-stone-600 text-white text-xl rounded-lg'><BsThreeDots /></button>
                        <button className='px-2 py-1 bg-red-700 text-white text-xl rounded-lg relative left-2'><IoCloseOutline /></button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
