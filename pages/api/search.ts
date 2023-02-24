// Interface of the necessary data for the recipes
import { Recipes } from '../../core/models/Recipes';
// Import of mapRecipe function used to map recipe data
import { mapRecipe } from '../../core/mappers/mapperRecipesData';

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
  const response: Response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);

  // Handle the API response and extract necessary data
  const data: any = await response
    .json()
    .then((response) => response.meals)
    .catch((e) => console.log(e));
  const recipes: Recipes[] = data?.map((recipe: Object) => mapRecipe(recipe));

  // Return the recipes obtained from the API
  return recipes;
};

export default handler;
