import React, { useRef } from 'react'
import Sidebar from './Sidebar'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com';

export default function ContactUs() {
  const { register, handleSubmit, watch, reset,formState: {errors} } = useForm()
  const form = useRef()

  const submit = (data) => {
    console.log(data);
    emailjs
      .sendForm(
        'service_knzy0pn', // Replace with your Service ID
        'template_1842fk5', // Replace with your Template ID
        form.current,
        'Q3IilYugPmBUARX0S' // Replace with your User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send message.');
        }
      );
  }

  return (
    <div className='px-2 sm:pl-[90px] sm:pr-6 checkPoint1:pl-[160px]'>
      <Sidebar />
      <form className='flex flex-col max-w-[600px] text-green1 px-5 py-5 rounded-md shadow-md mx-auto mt-16 bg-slate-100' ref={form} onSubmit={handleSubmit(submit)}> 
        <h3 className='text-3xl mb-4 font-medium rubik'>Contact Us</h3>
        <div className='flex flex-col gap-1 text-lg mb-6'>
          <label className='rubik font-medium' htmlFor="name">Name:</label>
          <input className='px-6 py-1 outline-none focus:shadow-md transition-all duration-200 rounded-full' {...register("user_name", { maxLength: {value: 40, message: "Name limit is 40 characters"} })} type="text" placeholder='ex:John Doe' />
        </div>
        <div className='flex flex-col gap-1 text-lg mb-6'>
          <label className='rubik font-medium' htmlFor="email">Email:</label>
          <input className='px-6 py-1 outline-none focus:shadow-md transition-all duration-200 rounded-full'  {...register("user_email", { maxLength: {value: 70, message: "Email limit is 70 characters"} })} type="text" placeholder='ex:someone@example.com' />
        </div>
        <div className='flex flex-col gap-1 text-lg mb-6'>
          <label className='rubik font-medium' htmlFor="issue">Issue/Concern:</label>
          <textarea className='px-6 py-1 outline-none focus:shadow-md transition-all duration-200 rounded-md resize-none h-[100px]' {...register("message", { maxLength: {value: 400, message: "Issue limit is 400 characters"} })} name="message"></textarea>
        </div>

        <div className='mx-auto'>
          <button className='bg-green2 text-white px-6 py-2 rounded-full rubik font-medium hover:bg-white hover:text-green2 hover:shadow-shadow1 transition-all duration-100'>
            Send
          </button>
        </div>
      </form>
    </div>
  )
}
