import React from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { useForm } from 'react-hook-form';
import { FaCircleExclamation } from "react-icons/fa6";

export default function ConsumeForm({ setIsShown, setFoodLog, toggleModal }) {
  const { register, handleSubmit, watch, reset,formState: {errors} } = useForm()

  const submit = (data) => {
    console.log(data);
    setFoodLog(data)
    reset()
    toggleModal()
  }

  return (
    <div className='fixed inset-0 w-[1000vh] height-[100vh] z-50'>
      <div onClick={toggleModal} className='fixed inset-0 w-[1000vh] height-[100vh] bg-modal z-100'></div>
      <div className='modal-content shadow-innerborder overflow-clip border border-green2 bg-slate-100 rounded-lg px-6  py-6'>
        <button onClick={toggleModal} className='absolute -top-1 -right-1 px-2 pr-3 py-2 pt-3 bg-green2 borer border-green2 text-white rounded-md hover:text-green2 hover:bg-slate-50 transition-all duration-100 shadow-shadow1'>
          <IoCloseOutline />
        </button>
        <h3 className='text-2xl text-green2 mb-4'>Add Food</h3>

        <form onSubmit={handleSubmit(submit)}>
          <div className='text-green2 flex flex-col text-lg'>
            <label htmlFor="name">Name:</label>
            <input {...register("name", { maxLength: {value: 30, message: "Name limit is 30 characters"} })} type="text" placeholder='ex:apple' className='text-green1 text-lg px-2 placeholder:text-green3 outline-green3 bg-stone-50 rounded-sm' />
            {errors.name && (
              <div className='text-red-800 flex items-center gap-2 bg-red-100 py-1 px-4 mt-1 rounded-md'>
                <FaCircleExclamation />
                <span className='text-base'>
                  {errors.name.message}
                </span>
              </div>
            )}
          </div>

          <div className='text-green2 flex flex-col text-lg my-2'>
            <label htmlFor="grams">Grams:</label>
            <input {...register("grams", { 
              required: "Grams input is required",
              min: {value: 1, message: "Value must be at least 1"},
              max: {value: 2000, message: "Value must be no more than 2000"}
            })} type="text" placeholder='ex:100g' className='text-green1 text-lg px-2 placeholder:text-green3 outline-green3 bg-stone-50 rounded-sm' />
            {errors.grams && (
              <div className='text-red-800 flex items-center gap-2 bg-red-100 py-1 px-4 mt-1 rounded-md'>
                <FaCircleExclamation />
                <span>
                  {errors.grams.message}
                </span>
              </div>
            )}
          </div>

          <div className='text-green2 flex flex-col text-lg'>
            <label htmlFor="caloriesperhundredgrams">CaloriesPerHundredGrams:</label>
            <input {...register("caloriesPerHundredGrams", { 
              required: "caloriesPerHundredGrams input is required",
              min: {value: 1, message: "Value must be at least 1"},
              max: {value: 2000, message: "Value must be no more than 2000"}
            })} type="text" placeholder='ex:100cal/100gram' className='text-green1 text-lg px-2 placeholder:text-green3 outline-green3 bg-stone-50 rounded-sm' />
            {errors.caloriesPerHundredGrams && (
              <div className='text-red-800 flex items-center gap-2 bg-red-100 py-1 px-4 mt-1 rounded-md'>
                <FaCircleExclamation />
                <span>
                  {errors.caloriesPerHundredGrams.message}
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
