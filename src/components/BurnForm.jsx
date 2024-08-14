import React from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { useForm } from 'react-hook-form';
import { FaCircleExclamation } from "react-icons/fa6";

export default function BurnForm({ setIsShown, setActivityLog, toggleModal }) {
  const { register, handleSubmit, watch, reset,formState: {errors} } = useForm()

  const submit = (data) => {
    setActivityLog(data)
    reset()
    toggleModal()
  }

  return (
    <div className='fixed inset-0 w-[1000vh] height-[100vh] z-50'>
      <div onClick={toggleModal} className='fixed inset-0 w-[1000vh] height-[100vh] bg-modal z-100'></div>
      <div className='modal-content md:w-[500px] shadow-innerborder overflow-clip border border-green2 bg-slate-100 rounded-lg px-6  py-6'>
        <button onClick={toggleModal} className='absolute -top-1 -right-1 px-2 pr-3 py-2 pt-3 bg-green2 borer border-green2 text-white rounded-md hover:text-green2 hover:bg-slate-50 transition-all duration-100 shadow-shadow1'>
          <IoCloseOutline />
        </button>
        <h3 className='text-2xl text-green2 mb-4'>Add Activity</h3>

        <form onSubmit={handleSubmit(submit)}>
          <div className='text-green2 flex flex-col text-lg'>
            <label htmlFor="activity">Activity:</label>
            <input {...register("activity", { maxLength: {value: 30, message: "Name limit is 30 characters"} })} type="text" placeholder='ex:walking' className='text-green1 text-lg px-2 placeholder:text-green3 outline-green3 bg-stone-50 rounded-sm' />
            {errors.activity && (
              <div className='text-red-800 flex items-center gap-2 bg-red-100 py-1 px-4 mt-1 rounded-md'>
                <FaCircleExclamation />
                <span className='text-base'>
                  {errors.activity.message}
                </span>
              </div>
            )}
          </div>

          <div className='text-green2 flex flex-col text-lg my-2'>
            <label htmlFor="time">Time in Minutes:</label>
            <input {...register("time", { 
              required: "Time input is required",
              min: {value: 1, message: "Value must be at least -2000"},
              max: {value: 180, message: "Value must be no more than 2000"},
              pattern: {
                value: /^\d+$/,
                message: "Please enter a valid number"
              }
            })} type="text" placeholder='ex:60mins' className='text-green1 text-lg px-2 placeholder:text-green3 outline-green3 bg-stone-50 rounded-sm' />
            {errors.time && (
              <div className='text-red-800 flex items-center gap-2 bg-red-100 py-1 px-4 mt-1 rounded-md'>
                <FaCircleExclamation />
                <span>
                  {errors.time.message}
                </span>
              </div>
            )}
          </div>

          <div className='text-green2 flex flex-col text-lg my-2'>
            <label htmlFor="burnedCalories">Burned Calories:</label>
            <input {...register("burnedCalories", { 
              required: "burnedCalories input is required",
              min: {value: 1, message: "Value must be at least -2000"},
              max: {value: 2000, message: "Value must be no more than 2000"},
              pattern: {
                value: /^\d+$/,
                message: "Please enter a valid number"
              }
            })} type="text" placeholder='ex:100cal' className='text-green1 text-lg px-2 placeholder:text-green3 outline-green3 bg-stone-50 rounded-sm' />
            {errors.burnedCalories && (
              <div className='text-red-800 flex items-center gap-2 bg-red-100 py-1 px-4 mt-1 rounded-md'>
                <FaCircleExclamation />
                <span>
                  {errors.burnedCalories.message}
                </span>
              </div>
            )}
          </div>

          <div className='w-full flex items-center justify-center mt-4'>
            <button className='text-slate-50 bg-green2 px-8 py-1 text-lg rounded-md hover:text-green2 hover:bg-slate-50 transition-all duration-100 shadow-shadow1'>
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
