import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar';

export default function Nutrients() {
    const [data, setData] = useState(JSON.parse(localStorage.getItem('foodLog')) || [])
    const [totalNutrients, setTotalNutrients] = useState(null)

    const countNutrients = () => {
        console.log(data);
        
        const result = {
            calories: {name: 'Calories' ,quantity: 0, unit: 'cal'},
            CA: {name: 'Calcium' ,quantity: 0, unit: 'mg'},
            CHOCDF: {name: 'Carbohydrates' ,quantity: 0, unit: 'g'},
            FAT: {name: 'Total lipid (fat)' ,quantity: 0, unit: 'g'},
            SUGAR: {name: 'Sugars' ,quantity: 0, unit: 'g'},
            PROCNT: {name: 'Protein' ,quantity: 0, unit: 'g'},
            FE: {name: 'Iron' ,quantity: 0, unit: 'mg'},
            K: {name: 'Potassium' ,quantity: 0, unit: 'mg'},
            MG: {name: 'Magnesium' ,quantity: 0, unit: 'mg'},
            NA: {name: 'Sodium' ,quantity: 0, unit: 'mg'},
            CHOLE: {name: 'Cholesterol' ,quantity: 0, unit: 'mg'},
            FAMS: {name: 'Fatty acids, total monounsaturated' ,quantity: 0, unit: 'g'},
            FAPU: {name: 'Fatty acids, total polyunsaturated' ,quantity: 0, unit: 'g'},
            FASAT: {name: 'Fatty acids, total saturated' ,quantity: 0, unit: 'g'},
            FATRN: {name: 'Fatty acids, total trans' ,quantity: 0, unit: 'g'},
        }

        data.forEach(item => {
            result.calories.quantity += item.calories || 0;
            
            if (!item.isCustom) {
                const nutrients = item.totalNutrients || {};
                Object.keys(result).forEach(key => {
                    if (nutrients[key]) {
                        result[key].quantity += nutrients[key].quantity || 0;
                    }
                });
            }
        })

        setTotalNutrients(result)
        
    }

    useEffect(() => {
        countNutrients()
        console.log(totalNutrients)
        
    }, [])
  
  return (
    <>
      <div className='checkPoint1:pl-[192px] pl-[80px]'>
        <Sidebar />

        <div className=' mt-12 text-green1 text-2xl rounded-lg w-full flex flex-col items-center justify-center'>
            <h2 className='mb-4 text-3xl'>Total Nutrients Consumed</h2>
            <div className='py-2 w-min'>
                {totalNutrients && (
                    <div className='grid checkPoint2:grid-cols-2 w-[400px] checkPoint2:w-[800px] max-h-[550px] mx-auto overflow-y-auto gap-x-4'>
                        {Object.keys(totalNutrients).map((key, index) => (
                            <p className='border-b px-4 py-2 bg-slate-100 text-lg checkPoint2:text-2xl checkPoint2:px-8 checkPoint2:py-3'>
                                <span className='font-medium'>{totalNutrients[key].name}</span>:
                                <span className='ml-2'>{Math.round(totalNutrients[key].quantity)}</span>
                                <span>{totalNutrients[key].unit}</span>
                            </p>
                        ))}
                        
                    </div>
                )}
            </div>
            
        </div>
      </div>
    </>
  )
}
