import React from 'react'
import Navbar from './components/Navbar'
import CardsSection from './components/CardsSection'
import chartoonPic1 from './assets/chartoonPic1.png'
import { MdFeedback } from "react-icons/md";

export default function Root() {
  return (
    <div>
      <Navbar />

      <div className='flex items-center justify-center checkPoint1:justify-between flex-row-reverse px-16 h-[100vh] text-center checkPoint1:text-left text-green1 bg-slate-100 relative'>
         <div className='opacity-60 relative -top-4 w-[300px] hidden checkPoint1:block'>
          <img src="https://cdn.discordapp.com/attachments/1271872723739611174/1273032476268429414/basil.png?ex=66bd2362&is=66bbd1e2&hm=f36280b2eb7bf71c59a98142db4a8cc1961f03567b699e957a05c7d63c282044&" />
         </div>

         <div className='flex flex-col items-center checkPoint1:items-start'>
          <h1 className='text-3xl sm:text-4xl rubik mb-3'>
            Track Your Meals, Master Your Health
          </h1>

          <h2 className='max-w-[700px] mx-auto checkPoint1:m-0 text-lg sm:text-xl rubik'>
            Say goodbye to guesswork! MunchMeter makes it easy to count calories, monitor micro-nutrients, and achieve your health goals—all in one smart, user-friendly Web app.
          </h2>
          

          <div className='bg-white relative top-12 w-fit text-green-950 px-8 py-3 h-[60px] sm:h-[80px] rounded-full text-base sm:text-xl'>
            <p>"Best Nutrition App I have ever seen!"</p>
            <span className='absolute right-8 italic'>- John Doe</span>
          </div>
        </div>
      </div>

      <CardsSection />

      <div className='px-16 py-20 bg-slate-100 flex items-center justify-center checkPoint2:justify-between'>
        <div>
          <h3 className='text-3xl font-medium mb-3 text-green1 flex items-center gap-2'><MdFeedback /> Collecting Feedback</h3>
          <p className='max-w-[450px] bigCheckPoint:max-w-[600px] text-xl text-green1'>
            We gathered valuable <strong>insights</strong> and <strong>feedback</strong> from real users and expert contributors, addressing their problems and incorporating their ideas into the <strong>app's design</strong> and <strong>functionality</strong>.
          </p>
        </div>

        <div className='hidden checkPoint2:block max-w-[350px] checkPoint1:max-w-[450px]'>
          <img src={chartoonPic1} />
        </div>
      </div>
    </div>
  )
}
