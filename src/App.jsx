import Sidebar from './components/Sidebar'
import React, { useEffect, useState } from 'react'

import { IoCloseOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { FaBookOpen } from "react-icons/fa";
import CircularProgressBar from './components/CircularProgressBar';

export default function page() {
  const caloriesLimit = 5000
  const [ foodLog, setFoodLog ] = useState(JSON.parse(localStorage.getItem('foodLog')) || [])
  const [ activityLog, setActivityLog ] = useState(JSON.parse(localStorage.getItem('activityLog')) || [])

  const handleDelete = (log, storageKey,index) => {
    let newLog = []
    for (let i = 0; i < log.length; i++) {
      if (index !== i) {
        newLog.push(log[i])
      }
    }

    localStorage.setItem(storageKey, JSON.stringify(newLog))
    if (storageKey === 'foodLog') {
      setFoodLog(newLog)
    } else if (storageKey === 'activityLog') {
      setActivityLog(newLog)
    }
  }

  const handleAddNewFoodLog = (newLogItem) => {
    const newLog = [...foodLog, newLogItem];
    setFoodLog(newLog);
    localStorage.setItem('foodLog', JSON.stringify(newLog))
  }

  const handleAddNewActivyLog = (newLogItem) => {
    const newLog = [...activityLog, newLogItem];
    setActivityLog(newLog);
    localStorage.setItem('activityLog', JSON.stringify(newLog))
  }

  const countCalories = () => {
    let caloriesConsumed = 0
    
    for (let i = 0; i < foodLog.length; i++) {
      caloriesConsumed += foodLog[i].calories
    }

    for (let i = 0; i < activityLog.length; i++) {
      caloriesConsumed -= activityLog[i].burnedCalories
    }

    return caloriesConsumed
  }

  // localStorage.clear()

  return (
    <div className='pl-6 sm:pl-[90px] pr-6 checkPoint1:pl-[160px] z-10'>
      <Sidebar setFoodLog={handleAddNewFoodLog} setActivityLog={handleAddNewActivyLog} />

      <main className='flex flex-col max-w-4xl mx-auto mt-10'>
        <div className='bg-slate-50 shadow-md px-6 py-4 rounded-2xl flex items-center justify-center md:justify-start gap-8'>
          <div className='relative'>
            <CircularProgressBar size={200} progress={countCalories() / caloriesLimit * 100} />

            <div className='absolute inset-[25%] flex flex-col items-center justify-center'>
              <span className='text-green2 text-3xl'>{countCalories()}/</span>
              <span className='italic font-semibold relative left-4 text-green2 text-xl'>{caloriesLimit}</span>
            </div>
          </div>

          <div className='flex-col hidden md:flex'>
            <p className='text-3xl flex items-center gap-4 text-green-900 font-semibold'>
              <span className='text-6xl text-green-900 italic'>{caloriesLimit - countCalories()}</span> <span>Calories left to consume!</span>
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
          <div className='bg-slate-50 px-4 py-2 rounded-md overflow-y-auto max-h-[320px] w-[100%] md:w-full'>
            <div className='overflow-x-auto'> {/* Wrap the table in another div */}
              <table className='min-w-full '>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Total Weight</th>
                    <th>Total Calories</th>
                    <th>More</th>
                  </tr>
                </thead>
                <tbody>
                  {foodLog && (
                    foodLog.map((item, index) => (
                      <tr key={index}>
                        <td>{index}</td>
                        <td>{item.strMeal}</td>
                        <td>{Math.round(item.totalWeight)}g</td>
                        <td>{item.calories}cal</td>
                        <td className='flex items-center'>
                          <button className='px-2 py-1 bg-stone-600 text-white text-xl rounded-lg'><BsThreeDots /></button>
                          <button onClick={() => handleDelete(foodLog, 'foodLog', index)} className='px-2 py-1 bg-red-700 text-white text-xl rounded-lg relative left-2'><IoCloseOutline /></button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>


        </div>

        <div className='table mt-8'>
          <h3 className='text-xl px-2 mb-2 text-green1 flex items-center gap-2'>
            <span>Activity Log</span>
            <FaBookOpen />
          </h3>

          <div className='bg-slate-50 px-4 py-2 rounded-md overflow-y-auto max-h-[320px] w-[100%] md:w-full'>
            <div className='overflow-x-auto'> {/* Wrap the table in another div */}
              <table className='min-w-full '>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Activity</th>
                    <th>Time</th>
                    <th>Burned Calories</th>
                    <th>More</th>
                  </tr>
                </thead>
                <tbody>
                  { activityLog && (
                    activityLog.map((item, index) => (
                      <tr key={index}>
                        <td>{index}</td>
                        <td>{item.activity}</td>
                        <td>{item.time}mins</td>
                        <td>{item.burnedCalories}cal</td>
                        <td className='flex items-center'>
                          <button className='px-2 py-1 bg-stone-600 text-white text-xl rounded-lg'><BsThreeDots /></button>
                          <button onClick={() => handleDelete(activityLog, 'activityLog',index)} className='px-2 py-1 bg-red-700 text-white text-xl rounded-lg relative left-2'><IoCloseOutline /></button>
                        </td>
                      </tr>
                    )))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
