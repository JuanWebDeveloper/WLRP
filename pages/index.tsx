// Interface of the necessary data for the recipes
import { Recipes } from '@/core/models/Recipes';
// Import of mapRecipe function used to map recipe data
import { mapRecipe } from '@/core/mappers/mapperRecipesData';
// Import components of the page
import { Header } from '@/views/components/Home/Header';
import { ViewOptions } from '@/views/components/Home/ViewOptions';
import { Card } from '@/views/components/shared/Card';
import { useState } from 'react';

const Home = (props: Recipes[]) => {
  const [grid, setGrid] = useState('fourParts');
  const { recipes }: Recipes | any = props;

  return (
    <div className='home'>
      <div className='content'>
        <Header />
        <ViewOptions grid={grid} setGrid={setGrid} />

        <div className={`cards ${grid}`}>
          {recipes.map((recipe: Recipes | any) => (
            <Card key={recipe.idRecipe} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

// API call to fetch recipes
export const getStaticProps = async () => {
  // Select a random food from the foods array
  const foods: string[] = ['Chicken breast', 'Salmon', 'Beef steak', 'Pork chops'];
  const randomFood: string = foods[Math.floor(Math.random() * foods.length)];

  // Make a request to TheMealDB API to get recipes
  const baseUrl: string = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const response: Response = await fetch(`${baseUrl}${randomFood.replace(/\s/g, '&')}`);

  // Handle the API response and extract necessary data
  const data: any = await response
    .json()
    .then((response) => response.meals)
    .catch((e) => console.log(e));
  const recipes: Recipes[] = data?.map((recipe: Object) => mapRecipe(recipe));

  // Return the recipes obtained from the API
  return {
    props: { recipes },
  };
};
