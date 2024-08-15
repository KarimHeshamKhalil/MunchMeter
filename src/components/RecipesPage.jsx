import React from 'react'
import Sidebar from './Sidebar'
import Recipes from './Recipes'

export default function RecipesPage() {
  return (
    <div className='pl-[90px] pr-6 checkPoint1:pl-[192px]'>
      <Sidebar />

      <h3 className='text-2xl text-green1 max-w-fit mx-auto mt-12 -mb-12'>
        Search Any Recipe By Name
      </h3>
      <Recipes isPage={true} />
    </div>
  )
}
