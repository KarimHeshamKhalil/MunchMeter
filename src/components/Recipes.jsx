import React, { useEffect, useState } from 'react'
import { fetchByUrl } from '../functionality/fetchByUrl'
import Sidebar from './Sidebar'
import { IoIosArrowForward } from "react-icons/io";
import { IoCloseOutline } from 'react-icons/io5';

export default function Recipes({ isPage, setRecipe }) {
  const [recipes, setRecipes] = useState(null)
  const [error, setError] = useState(null)
  const [recipeName, setRecipeName] = useState('')
  const [isRecipeShown, setIsRecipeShow] = useState(false)
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [isShowMore, setIsShowMore] = useState(false)
  

  async function getData() {
    try {
    const data = await fetchByUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`)
    setRecipes(data.data)
    
    } catch (error) {
      setError(error)
    }
    
  }

  const toggleModal = () => {
    setIsRecipeShow(prevVal => !prevVal)
  }

  const handleRecipe = (item) => {
    if (isPage) {
      setSelectedRecipe(item)
      setIsRecipeShow(true)
    } else {
      setRecipe(item)
    }
    
  }

  const getIngredients = () => {
    let result = []
    Object.keys(selectedRecipe).forEach(key => {
      if (key.startsWith('strIngredient')) {
        if (selectedRecipe[key]) {
          result.push({
            ingredient: selectedRecipe[key],
            measure: selectedRecipe['strMeasure' + key.slice(13)]
          })
        }
      }
    })

    return result
  }

  if (selectedRecipe) {
    getIngredients()
  }
  return (
    <div>
      <div className='max-w-[1000px] mx-auto mt-16 relative'>
        <input className='bg-white1 w-full px-6 py-2 rounded-full text-green1 outline-none focus:shadow-shadow1 shadow-sm' type="text" placeholder='search recipe by name ex:burger' value={recipeName} onChange={(e) => setRecipeName(e.currentTarget.value)} />

        <button onClick={getData} className='px-3 py-2 bg-green2 rounded-full absolute right-2 top-1 text-white hover:shadow-shadow1 group'>
          <IoIosArrowForward className='group-hover:rotate-90 transition-all duration-200' />
        </button>

        <div className='bg-slate-50 w-full px-4 py-4 mt-4 overflow-y-auto max-h-[500px]'>
          {recipes && recipes.meals && recipes.meals.map((item, i) => (
            <button key={i} onClick={() => handleRecipe(item)} className='px-2 py-1 hover:bg-white1 w-full text-left text-lg flex items-center gap-2 border-b'>
              <span className='text-base text-green2'>{String(i+1)}-</span> <span className='text-green1'>{item.strMeal}</span>
            </button>
          ))}
          {
            recipes && !recipes.meals && (
              <p className='text-green2'>Oops, Could Not Find Your Meal</p>
            )
          }
        </div>
      </div>

      {isRecipeShown && (
        <div className='fixed inset-0 w-[1000vh] height-[100vh] z-50'>
          <div onClick={toggleModal} className='fixed inset-0 w-[1000vh] height-[100vh] bg-modal z-100'></div>
          <div className='modal-content w-[80%] xs:w-[700px] shadow-innerborder overflow-hidden border border-green2 bg-slate-100 rounded-lg px-6 py-6 flex flex-col checkPoint2:flex-row-reverse justify-between items-center gap-3'>
            <button onClick={toggleModal} className='absolute -top-1 -right-1 px-2 pr-3 py-2 pt-3 bg-green2 borer border-green2 text-white rounded-md hover:text-green2 hover:bg-slate-50 transition-all duration-100 shadow-shadow1'>
              <IoCloseOutline />
            </button>

            <div>
              <img className='max-w-[200px] rounded-md' src={selectedRecipe.strMealThumb} alt="RecipeImage" />
            </div>

            <div className='flex flex-col'>
              <h3 className='text-xl text-green1 mb-1'>{selectedRecipe.strMeal}</h3>

              <p className='text-base text-green2'>
                Ingredients:
              </p>

              <div className='px-4 text-green1'>
                {
                  getIngredients().map((ingredient, index) => (
                    <p key={index} className='flex items-center gap-2'>
                      <span>{String(index+1)}-</span>
                      <span>{ingredient.ingredient}</span>
                      &#x2192;
                      <span>{ingredient.measure}</span>
                    </p>
                  ))
                }
              </div>

              <div>
                <span className='text-green2 mr-2'>Instructions:</span>
                <span className='text-green1'>{selectedRecipe.strInstructions.slice(0, 52)}..</span>
                <button onClick={() => setIsShowMore(true)} className='bg-green2 text-white px-2 rounded-md'>more</button>
              </div>
              <div className='flex items-center gap-4 text-green1 mt-1'>
                <div>
                  <span>Category:</span>
                  <span className='text-green2 ml-1'>{selectedRecipe.strCategory}</span>
                </div>
                <div>
                  <span>Area:</span>
                  <span className='text-green2 ml-1'>{selectedRecipe.strArea}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {
        (isRecipeShown && isShowMore) && (
          <div className='fixed inset-0 w-[1000vh] height-[100vh] z-50'>
            <div onClick={() => setIsShowMore(false)} className='fixed inset-0 w-[1000vh] height-[100vh] bg-modal z-100'></div>
            <div className='modal-content w-[80%] xs:w-[700px] max-h-[500px] shadow-innerborder overflow-x-hidden overflow-y-auto border border-green2 bg-slate-100 rounded-lg px-6 py-6 gap-3'>
              <button onClick={() => setIsShowMore(false)} className='absolute -top-1 -right-1 px-2 pr-3 py-2 pt-3 bg-green2 borer border-green2 text-white rounded-md hover:text-green2 hover:bg-slate-50 transition-all duration-100 shadow-shadow1'>
                <IoCloseOutline />
              </button>

              <h2 className='text-xl font-medium text-green2 mb-2'>Instructions:</h2>
              <p className='text-green1 text-lg'>
                {selectedRecipe.strInstructions}
              </p>
            </div>

            
          </div>
        )
      }
    </div>
  )
}
