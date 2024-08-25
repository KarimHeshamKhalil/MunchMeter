import React, { useState } from 'react'
import Navbar from './components/Navbar'
import CardsSection from './components/CardsSection'
import chartoonPic1 from './assets/chartoonPic1.png'
import basil from './assets/basil.webp'
import { MdFeedback } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa";
import Footer from './components/Footer';

export default function Root() {

  return (
    <div>
      <Navbar />

      <div className='flex items-center justify-center checkPoint1:justify-between flex-col-reverse checkPoint1:flex-row-reverse px-16 h-[105vh] text-center checkPoint1:text-left text-green1 bg-slate-100 relative'>
         <div className='opacity-60 relative top-20 checkPoint1:-top-4 w-[200px] md:w-[300px] block checkPoint1:block'>
          <img src={basil} />
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

      <div className='block w-full mb-6 mt-16 text-center text-green1 text-3xl font-medium'>
        Walkthrough of our Process
      </div>

      <div className='relative'>
        <div className='px-16 py-16 mb-4 bg-slate-100 flex flex-col checkPoint2:flex-row items-center justify-center checkPoint2:justify-between'>
          <div className='px-6 py-6 rounded-md bg-slate-100 relative hover:-translate-y-4 hover:shadow-card transition-all duration-200'>
            <h3 className='text-3xl font-medium mb-3 text-green1 flex items-center gap-2 rubik'><MdFeedback /> Collecting Feedback</h3>
            <p className='max-w-[450px] bigCheckPoint:max-w-[600px] text-xl text-green1'>
              We gathered valuable <strong>insights</strong> and <strong>feedback</strong> from real users and expert contributors, addressing their problems and incorporating their ideas into the <strong>app's design</strong> and <strong>functionality</strong>.
            </p>
          </div>

          <div className='max-w-[350px] checkPoint1:max-w-[450px]'>
            <img src={chartoonPic1} />
          </div>
        </div>
        <div className='px-12 py-16 mb-4 bg-slate-100 flex flex-col checkPoint2:flex-row-reverse items-center justify-center checkPoint2:justify-between'>
          <div className='px-6 py-6 rounded-md bg-slate-100 relative hover:-translate-y-4 hover:shadow-card transition-all duration-200'>
            <h3 className='text-3xl font-medium mb-3 text-green1 flex items-center gap-2 rubik'><MdFeedback />Identifying Problems</h3>
            <p className='max-w-[450px] bigCheckPoint:max-w-[600px] text-xl text-green1'>
            We've identified the common <strong>challenges</strong> people face when it comes to <strong>nutrition</strong> and maintaining a healthy diet. Our goal is to address these issues by providing <strong>practical</strong>, <strong>personalized</strong> solutions.
            </p>
          </div>

          <div className='max-w-[350px] checkPoint1:max-w-[450px]'>
            <img src='https://cdni.iconscout.com/illustration/premium/thumb/problem-solving-illustration-download-in-svg-png-gif-file-formats--looking-for-solution-business-idea-and-pack-people-illustrations-4019071.png' />
          </div>
        </div>
        <div className='px-12 py-16 bg-slate-100 items-center justify-center flex flex-col checkPoint2:flex-row checkPoint2:justify-between mb-12'>
          <div className='px-6 py-6 rounded-md bg-slate-100 relative hover:-translate-y-4 hover:shadow-card transition-all duration-200'>
            <h3 className='text-3xl font-medium mb-3 text-green1 flex items-center gap-2 rubik'><FaLightbulb />Best Solution</h3>
            <p className='max-w-[450px] bigCheckPoint:max-w-[600px] text-xl text-green1'>
              We have thought of <strong>three</strong> possible solutions and we have decided to create a <strong>Web App</strong> so it is <strong>suitable</strong> for everyone and <strong>scalable</strong>
            </p>
          </div>

          <div className='max-w-[350px] checkPoint1:max-w-[450px]'>
            <img src='https://static.vecteezy.com/system/resources/previews/010/869/741/original/faq-concept-illustration-people-looking-through-magnifying-glass-at-interrogation-point-searching-solutions-useful-information-customer-support-solving-problem-free-png.png' />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
