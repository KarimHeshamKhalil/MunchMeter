import Sidebar from '@/app/components/Sidebar'
import React from 'react'
import CircularProgressBar from '@/app/components/CircularProgressBar';


export default function page() {
  return (
    <div className='pl-[160px]'>
      <Sidebar />

      <main className='max-w-4xl mx-auto mt-10 bg-slate-50 shadow-md px-6 py-4 rounded-2xl flex items-center gap-8'>
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
      </main>
    </div>
  )
}
