import React from 'react'

export default function CardsSection() {
  return (
    <div className='px-8 py-4 grid grid-cols-1 gap-y-8 checkPoint3:grid-cols-2 bigCheckPoint:grid-cols-4 checkPoint1:grid-cols-3'>
      <div className='sm:max-w-[300px] mx-auto bg-slate-100 pl-8 pr-4 pt-4 pb-4 relative overflow-hidden rounded-md shadow-md hover:-translate-y-2 hover:shadow-card transition-all duration-200'>
        <div className='absolute -top-2 -left-2 pt-3 pb-1 px-3 pl-5 rounded-lg text-white bg-green2'>1</div>

        <h4 className='text-lg text-green1 mt-5 rubik'>
          Count your <strong>micronutrients</strong> with <strong>user-friendly</strong> tools and insure you are getting a sufficient amount of several vitamins!
        </h4>
      </div>

      <div className='sm:max-w-[300px] mx-auto bg-slate-100 pl-8 pr-4 pt-4 pb-4 relative overflow-hidden rounded-md shadow-md hover:-translate-y-2 hover:shadow-card transition-all duration-200'>
        <div className='absolute -top-2 -left-2 pt-3 pb-1 px-3 pl-5 rounded-lg text-white bg-green2'>2</div>

        <h4 className='text-lg text-green1 mt-5 rubik'>
          track your daily <strong>calorie intake</strong> with our easy-to-use tools wither you are on a <strong>calorie deficit</strong>, trying to <strong>maintain</strong>, or trying to <strong>gain weight</strong>
        </h4>
      </div>

      <div className='sm:max-w-[300px] mx-auto bg-slate-100 pl-8 pr-4 pt-4 pb-4 relative overflow-hidden rounded-md shadow-md hover:-translate-y-2 hover:shadow-card transition-all duration-200'>
        <div className='absolute -top-2 -left-2 pt-3 pb-1 px-3 pl-5 rounded-lg text-white bg-green2'>3</div>

        <h4 className='text-lg text-green1 mt-5 rubik'>
          Create a <strong>Customized Diet</strong> that adapts to your needs, allowing meal changes and ensuring it’s free of any allergens.
        </h4>
      </div>

      <div className='sm:max-w-[300px] mx-auto bg-slate-100 pl-8 pr-4 pt-4 pb-4 relative overflow-hidden rounded-md shadow-md hover:-translate-y-2 hover:shadow-card transition-all duration-200'>
        <div className='absolute -top-2 -left-2 pt-3 pb-1 px-3 pl-5 rounded-lg text-white bg-green2'>4</div>

        <h4 className='text-lg text-green1 mt-5 rubik'>
          Track your daily <strong>Cardiovascular Activities</strong> with our easy-to-use tools to keep you <strong>Motivated</strong> and help you get in the best shape
        </h4>
      </div>
      
    </div>
  )
}
