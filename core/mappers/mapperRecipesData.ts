// Interface of the necessary data for the recipes
import { Recipes } from '../models/Recipes';

// This function maps a recipe data object to a new recipe object with selected properties
export const mapRecipe = (recipeData: Object | any): Recipes => {
  return {
    idRecipe: recipeData.idMeal,
    name: recipeData.strMeal,
    image: recipeData.strMealThumb,
    instructions: recipeData.strInstructions,
    ingredients: [
      recipeData.strIngredient1,
      recipeData.strIngredient2,
      recipeData.strIngredient3,
      recipeData.strIngredient4,
      recipeData.strIngredient5,
      recipeData.strIngredient6,
      recipeData.strIngredient7,
      recipeData.strIngredient8,
      recipeData.strIngredient9,
      recipeData.strIngredient10,
      recipeData.strIngredient11,
      recipeData.strIngredient12,
      recipeData.strIngredient13,
      recipeData.strIngredient14,
      recipeData.strIngredient15,
      recipeData.strIngredient16,
      recipeData.strIngredient17,
      recipeData.strIngredient18,
      recipeData.strIngredient19,
      recipeData.strIngredient20,
    ],
    measures: [
      recipeData.strMeasure1,
      recipeData.strMeasure2,
      recipeData.strMeasure3,
      recipeData.strMeasure4,
      recipeData.strMeasure5,
      recipeData.strMeasure6,
      recipeData.strMeasure7,
      recipeData.strMeasure8,
      recipeData.strMeasure9,
      recipeData.strMeasure10,
      recipeData.strMeasure11,
      recipeData.strMeasure12,
      recipeData.strMeasure13,
      recipeData.strMeasure14,
      recipeData.strMeasure15,
      recipeData.strMeasure16,
      recipeData.strMeasure17,
      recipeData.strMeasure18,
      recipeData.strMeasure19,
      recipeData.strMeasure20,
    ],
    countryOrigin: recipeData.strArea,
  };
};

export const mapRecipeByCountry = (recipeData: Object | any): Recipes => {
  return {
    idRecipe: recipeData.idMeal,
    name: recipeData.strMeal,
    image: recipeData.strMealThumb,
  };
};
