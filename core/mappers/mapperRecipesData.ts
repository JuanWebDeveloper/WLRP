// Interface of the necessary data for the recipes
import { Recipes } from '../models/Recipes';

// This function maps a recipe data object to a new recipe object with selected properties
export const mapRecipe = (recipeData: Object | any): Recipes => {
  const ingredients: Array<string> = [];

  for (let i = 0; i < 20; i++) {
    if (recipeData[`strIngredient${i + 1}`] && recipeData[`strIngredient${i + 1}`] !== '') {
      ingredients.push(recipeData[`strIngredient${i + 1}`]);
    }
  }

  const Recipe: Recipes = {
    idRecipe: recipeData.idMeal,
    name: recipeData.strMeal,
    image: recipeData.strMealThumb,
    instructions: recipeData.strInstructions,
    ingredients,
    ingredientsImages: ingredients.map((ingredient) => `https://www.themealdb.com/images/ingredients/${ingredient}.png`),
    measures: ingredients.map((_, i) => recipeData[`strMeasure${i + 1}`]),
    countryOrigin: recipeData.strArea,
    category: recipeData.strCategory,
    video: recipeData.strYoutube,
  };

  return Recipe;
};

export const mapRecipeForCards = (recipeData: Object | any): Recipes => {
  return {
    idRecipe: recipeData.idMeal,
    name: recipeData.strMeal,
    image: recipeData.strMealThumb,
  };
};
