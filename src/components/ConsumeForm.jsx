import React, { useEffect, useState } from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { useForm } from 'react-hook-form';
import { FaCircleExclamation } from "react-icons/fa6";
import { fetchNutritionData } from '../functionality/fetchByUrl';
import Recipes from './Recipes';
import Notification from './Notification';

export default function ConsumeForm({ setFoodLog, toggleModal }) {
  const [isCustom, setIsCustom] = useState(false)
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [nutrition, setNutrition] = useState(null)
  const [ingredients, setIngredients] = useState([])
  const [showNutrition, setShowNutrition] = useState(false)
  const [error, setError] = useState('')
  const { register, handleSubmit, watch, reset,formState: {errors} } = useForm()

  const submit = (data) => {
    data.calories = Number(data.calories)
    data.isCustom = true
    setFoodLog(data)
    reset()
    toggleModal()
  }

  const getIngredients = () => {
    let result = []
    Object.keys(selectedRecipe).forEach(key => {
      if (key.startsWith('strIngredient')) {
        if (selectedRecipe[key]) {
          result.push(`${selectedRecipe['strMeasure' + key.slice(13)]} ${selectedRecipe[key]}`)
        }
      }
    })

    return result
  }
  

  useEffect(() => {
    if (selectedRecipe) {
      async function getData() {
        if (selectedRecipe) {
          const newNutrition = await fetchNutritionData(getIngredients())
          if (!newNutrition.error) {
            setNutrition(newNutrition.data)
            setShowNutrition(true)
          } else {
            setError(newNutrition.error)
          }
        }
      }

      getData()
    }
    
  }, [selectedRecipe])

  const handleFoodNutrition = () => {
    const newObj = {...nutrition, ...selectedRecipe}
    setFoodLog(newObj)
    toggleModal()
    showNutrition(false)
  }
  

  return (
    <div className='fixed inset-0 w-[1000vh] height-[100vh] z-50'>
      {error && (
        <Notification message={error} callback={() => setError('')} />
      )}
      <div onClick={toggleModal} className='fixed inset-0 w-[1000vh] height-[100vh] bg-modal z-100'></div>
      <div className='modal-content md:w-[500px] shadow-innerborder overflow-clip bg-slate-100 rounded-lg px-6 py-6'>
        <button onClick={toggleModal} className='absolute -top-1 -right-1 px-2 pr-3 py-2 pt-3 bg-green2 borer border-green2 text-white rounded-md hover:text-green2 hover:bg-slate-50 transition-all duration-100 shadow-shadow1'>
          <IoCloseOutline />
        </button>
        <h3 className='text-2xl text-green2 mb-4'>Add Food</h3>

        {
          isCustom ? (
            <form onSubmit={handleSubmit(submit)}>
              <button onClick={() => setIsCustom(false)} className='absolute top-6 left-36 px-2 py-1 bg-green1 text-white'>
                Automatic
              </button>
              <div className='text-green2 flex flex-col text-lg'>
                <label htmlFor="name">Name:</label>
                <input {...register("strMeal", { maxLength: {value: 30, message: "Name limit is 30 characters"} })} type="text" placeholder='ex:apple' className='text-green1 text-lg px-2 placeholder:text-green3 outline-green3 bg-stone-50 rounded-sm' />
                {errors.strMeal && (
                  <div className='text-red-800 flex items-center gap-2 bg-red-100 py-1 px-4 mt-1 rounded-md'>
                    <FaCircleExclamation />
                    <span className='text-base'>
                      {errors.strMeal.message}
                    </span>
                  </div>
                )}
              </div>

              <div className='text-green2 flex flex-col text-lg my-2'>
                <label htmlFor="totalweight">Total Weight:</label>
                <input {...register("totalWeight", { 
                  required: "totalWeight input is required",
                  min: {value: 1, message: "Value must be at least 1"},
                  max: {value: 2000, message: "Value must be no more than 2000"},
                  pattern: {
                    value: /^\d+$/,
                    message: "Please enter a valid number"
                  }
                })} type="text" placeholder='ex:100g' className='text-green1 text-lg px-2 placeholder:text-green3 outline-green3 bg-stone-50 rounded-sm' />
                {errors.totalWeight && (
                  <div className='text-red-800 flex items-center gap-2 bg-red-100 py-1 px-4 mt-1 rounded-md'>
                    <FaCircleExclamation />
                    <span>
                      {errors.totalWeight.message}
                    </span>
                  </div>
                )}
              </div>

              <div className='text-green2 flex flex-col text-lg'>
                <label htmlFor="calories">Total Calories:</label>
                <input {...register("calories", { 
                  required: "calories input is required",
                  min: {value: 1, message: "Value must be at least 1"},
                  max: {value: 2000, message: "Value must be no more than 2000"},
                  pattern: {
                    value: /^\d+$/,
                    message: "Please enter a valid number"
                  }
                })} type="text" placeholder='ex:100cal' className='text-green1 text-lg px-2 placeholder:text-green3 outline-green3 bg-stone-50 rounded-sm' />
                {errors.calories && (
                  <div className='text-red-800 flex items-center gap-2 bg-red-100 py-1 px-4 mt-1 rounded-md'>
                    <FaCircleExclamation />
                    <span>
                      {errors.calories.message}
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
          ): (
            <div className='-mt-8 max-h-[400px]'>
              <Recipes isPage={false} setRecipe={setSelectedRecipe}  />
              <button onClick={() => setIsCustom(true)} className='absolute top-6 left-36 px-2 py-1 bg-green1 text-white'>
                Custom
              </button>
            </div>
          )
        }

        {
          (nutrition && showNutrition) && (
            <div className='fixed inset-0 w-[1000vh] height-[100vh] z-50'>
            <div onClick={() => setShowNutrition(false)} className='fixed inset-0 w-[1000vh] height-[100vh] bg-modal z-100'></div>
              <div className='modal-content md:w-[500px] shadow-innerborder overflow-clip border border-green2 bg-slate-100 rounded-lg px-6 py-6 text-green1'>
                <button onClick={() => setShowNutrition(false)} className='absolute -top-1 -right-1 px-2 pr-3 py-2 pt-3 bg-green2 borer border-green2 text-white rounded-md hover:text-green2 hover:bg-slate-50 transition-all duration-100 shadow-shadow1'>
                  <IoCloseOutline />
                </button>

                <div>
                  <h3 className='text-lg'>Nutrition:</h3>
                  <p>
                    Calories: <span className='text-green2'>{nutrition.calories}</span>
                  </p>
                  <p>
                    Total CO2 Emissions <span className='text-green2'>{Math.round(nutrition.totalCO2Emissions)}</span>
                  </p>
                  <div>
                    <span>Total Nutrients: </span>
                    <ul className='px-2'>
                      <li>
                        Calcium: <span className='text-green2'>{Math.round(nutrition.totalNutrients.CA.quantity)}{nutrition.totalNutrients.CA.unit}</span>
                      </li>
                      <li>
                        Carbohydrates by difference: <span className='text-green2'>{Math.round(nutrition.totalNutrients.CHOCDF.quantity)}{nutrition.totalNutrients.CHOCDF.unit}</span>
                      </li>
                      <li>
                        Total Lipid (fat): <span className='text-green2'>{Math.round(nutrition.totalNutrients.FAT.quantity)}{nutrition.totalNutrients.FAT.unit}</span>
                      </li>
                      <li>
                        Iron Fe: <span className='text-green2'>{Math.round(nutrition.totalNutrients.FE.quantity)}{nutrition.totalNutrients.FE.unit}</span>
                      </li>
                      <li>
                        Potassium K: <span className='text-green2'>{Math.round(nutrition.totalNutrients.K.quantity)}{nutrition.totalNutrients.K.unit}</span>
                      </li>
                      <li>
                        Magnesium Mg: <span className='text-green2'>{Math.round(nutrition.totalNutrients.MG.quantity)}{nutrition.totalNutrients.MG.unit}</span>
                      </li>
                    </ul>
                  </div>

                  <div className='flex items-center justify-center py-1 mt-2'>
                    <button onClick={handleFoodNutrition} className='px-6 py-1 rounded-md bg-green2 text-white'>Add</button>
                  </div>
                </div>
              </div>
            </div>
          )
        }
        
      </div>
    </div>
  )
}
