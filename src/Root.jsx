import React from 'react'
import Navbar from './components/Navbar'
import MelonsPattern from './components/MelonsPattern'
import CardsSection from './components/CardsSection'

export default function Root() {
  return (
    <div>
      <Navbar />

      <div className='mt-16 py-20 px-16 text-center text-green1 bg-slate-100 relative'>
        <MelonsPattern length={6} />
        <h1 className='text-4xl rubik mb-3'>
          Track Your Meals, Master Your Health
        </h1>

        <h2 className='max-w-[700px] mx-auto text-xl rubik'>
          Say goodbye to guesswork! MunchMeter makes it easy to count calories, monitor micro-nutrients, and achieve your health goals—all in one smart, user-friendly Web app.
        </h2>
      </div>

      <CardsSection />
    </div>
  )
}
