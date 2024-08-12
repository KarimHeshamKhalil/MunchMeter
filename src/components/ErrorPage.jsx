import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  console.log(error);
  

  return (
    <div className='max-w-3xl mx-auto mt-32 text-center text-green1 bg-slate-100 py-12 rounded-lg shadow-md'>
      <h1 className='text-6xl'>
        Oops!
      </h1>
      <h2 className='text-3xl my-6'>
        Sorry, an unexpected error has happend
      </h2>

      <h3 className='text-xl'>
        Error: {error.statusText || error.message}
      </h3>
    </div>
  )
}
