import React from 'react'
import Sidebar from './Sidebar'
import Recipes from './Recipes'

export default function RecipesPage() {
  return (
    <div className='pl-[192px]'>
      <Sidebar />

      <Recipes isPage={true} />
    </div>
  )
}
