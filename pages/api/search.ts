// Interface of the necessary data for the recipes
import { Recipes } from '@/core/models/Recipes';
// Import of mapRecipe function used to map recipe data
import { mapRecipeForCards } from '@/core/mappers/mapperRecipesData';
// Utils
import { BaseURL } from '@/core/utils/baseURL';

const handler = async (req: any, res: any) => {
  // Get the search query.
  const query = req.query.q;

  // Here we perform the search using the search term `query`
  const results = await search(query);

  // Return the results in JSON format.
  res.status(200).json(results);
};

const search = async (query: string) => {
  // Make a request to TheMealDB API to get recipes
  const response: Response = await fetch(`${BaseURL}/search.php?s=${query}`);

  // Handle the API response and extract necessary data
  const data: any = await response
    .json()
    .then((response) => response.meals)
    .catch((e) => console.log(e));
  const recipes: Recipes[] = data?.map((recipe: Object) => mapRecipeForCards(recipe));

  // Return the recipes obtained from the API
  return recipes;
};

export default handler;
