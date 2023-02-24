// Interface of the necessary data for the recipes
import { Recipes } from '@/core/models/Recipes';
// Import of mapRecipe function used to map recipe data
import { mapRecipe } from '../core/mappers/mapperRecipesData';
// Import components of the page
import { Header } from '@/views/components/Home/Header';
import { ViewOptions } from '@/views/components/Home/ViewOptions';
import { Card } from '@/views/components/shared/Card';
import { useState } from 'react';

const Home = (props: Recipes[]) => {
  const { recipes }: Recipes | any = props;
  const [grid, setGrid] = useState('fourParts');
  const [cardsContent, setCardsContent] = useState(recipes);
  const [noRecipe, setNoRecipe] = useState('');

  return (
    <div className='home'>
      <div className='content'>
        <Header />
        <ViewOptions grid={grid} setGrid={setGrid} setCardsContent={setCardsContent} setNoRecipe={setNoRecipe} />

        {cardsContent.length >= 1 ? (
          <div className={`cards ${grid}`}>
            {cardsContent.map((recipe: Recipes | any) => (
              <Card key={recipe.idRecipe} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className='no-recipe'>
            <h2>
              <span>Sorry, no recipe {noRecipe}.</span>
            </h2>
          </div>
        )}
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

  const baseUrl: string = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const response: Response = await fetch(`${baseUrl}${randomFood.replace(/\s/g, '&')}`);

  const data: any = await response
    .json()
    .then((response) => response.meals)
    .catch((e) => console.log(e));
  const recipes: Recipes[] = data?.map((recipe: Object) => mapRecipe(recipe));

  return {
    props: {
      recipes,
    },
  };
};
