import { useState, Fragment } from 'react';
// Interface of the necessary data for the recipes
import { Recipes } from '@/core/models/Recipes';
import { ApiResponse } from '../core/models/ApiResponse';
// Import of mapRecipeForCards function used to map recipe data
import { mapRecipeForCards } from '@/core/mappers/mapperRecipesData';
// Utils
import { initialGrid } from '@/core/utils/initialGrid';
// Import components of the page
import { Header } from '@/views/components/Home/Header';
import { ViewOptions } from '@/views/components/shared/ViewOptions';
import { Card } from '@/views/components/shared/Card';
import { Loading } from '@/views/components/shared/Loading';
import { NoRecipe } from '@/views/components/shared/NoRecipe';
// Head
import { MyHead } from '@/views/components/shared/Head';

const Home = (props: { recipes: Recipes[] }) => {
  const recipes: Recipes[] | undefined = props.recipes;
  const [grid, setGrid] = useState(initialGrid(recipes.length));
  const [cardsContent, setCardsContent] = useState(recipes);
  const [noRecipe, setNoRecipe] = useState({ search: '', noRecipe: false });
  const [loading, setLoading] = useState(false);

  return (
    <Fragment>
      <MyHead titleName='Welcom To World Recipes' />
      <div className='home'>
        <div className='content'>
          <Header />
          <ViewOptions
            grid={grid}
            setGrid={setGrid}
            setCardsContent={setCardsContent}
            setNoRecipe={setNoRecipe}
            setLoading={setLoading}
            recipeQuantity={recipes.length}
          />

          {cardsContent.length >= 1 && !loading && (
            <div className={`cards ${grid}`}>
              {cardsContent.map((recipe: Recipes | any) => (
                <Card key={recipe.idRecipe} recipe={recipe} />
              ))}
            </div>
          )}
          {noRecipe.noRecipe && !loading && <NoRecipe message={`Sorry, no recipe ${noRecipe.search}.`} />}
          {loading && <Loading />}
        </div>
      </div>
    </Fragment>
  );
};

export default Home;

// API call to fetch recipes
export const getStaticProps = async () => {
  // Select a random food from the foods array
  const foods: string[] = ['Chicken breast', 'Salmon', 'Beef steak', 'Pork chops'];
  const randomFood: string = foods[Math.floor(Math.random() * foods.length)];

  const response: Response = await fetch(`${process.env.API_URL}/search.php?s=${randomFood.replace(/\s/g, '&')}`);

  const data: ApiResponse[] = await response
    .json()
    .then((response) => response.meals)
    .catch((e) => console.log(e));

  const recipes: Recipes[] = data.map((recipe: Object) => mapRecipeForCards(recipe));

  return { props: { recipes } };
};
