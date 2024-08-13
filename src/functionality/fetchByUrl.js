export async function fetchByUrl(url, options = {}) {
  let response = {}
  try {
    const res = await fetch(url, options)
    if (res.ok) {
      const data = await res.json()
      response.data = data
    } else {
      response.error = 'Failed to fetch data'
    }
    
  } catch (error) {
    response.error = error.message
    throw error
  }

  return response
}

export async function fetchNutritionData(ingredients) {
  const result = {}
  const apiKey = '47f772c828c1f8e40e50e3c6699c8486';
  const appId = 'efd9d5ae';
  const url = `https://api.edamam.com/api/nutrition-details?app_id=${appId}&app_key=${apiKey}`;

  // The payload for the API request
  const recipeData = {
    title: "Sample Recipe",
    ingr: ingredients
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recipeData), 
    });

    if (response.ok) {
      const data = await response.json();
      result.data = data
    } else {
      result.error = 'Failed to analyze nutrition'
    }
  } catch (error) {
    result.error = error.message
  }

  return result
}