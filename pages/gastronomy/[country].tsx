import { useState } from 'react';
import { GetStaticPropsContext, GetStaticPaths } from 'next';
// Interface
import { Recipes } from '@/core/models/Recipes';
import { ApiResponse } from '@/core/models/ApiResponse';
// Mapper
import { mapRecipeForCards } from '@/core/mappers/mapperRecipesData';
// Utils
import { initialGrid } from '@/core/utils/initialGrid';
import { countries } from '@/core/utils/countries';
import { BaseURL } from '@/core/utils/baseURL';
// Components of the page
import { CountriesFilter } from '@/views/components/Gastronomy/CountriesFilter';
import { ViewOptions } from '@/views/components/shared/ViewOptions';
import { Card } from '@/views/components/shared/Card';

const GastronomyByCountry = (props: { recipes: Recipes[] }) => {
  const recipes: Recipes[] = props.recipes;
  const [grid, setGrid] = useState(initialGrid(recipes.length));
  const [cardsContent, setCardsContent] = useState(recipes);
  const [loading, setLoading] = useState(false);

  return (
    <div className='gastronomy-country'>
      <div className='content'>
        <CountriesFilter />
        <ViewOptions
          grid={grid}
          setGrid={setGrid}
          setCardsContent={setCardsContent}
          setLoading={setLoading}
          recipeQuantity={recipes.length}
          style={{ display: 'none' }}
        />

        {cardsContent.length >= 1 && !loading && (
          <div className={`cards ${grid}`}>
            {cardsContent.map((recipe: Recipes | any) => (
              <Card key={recipe.idRecipe} recipe={recipe} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GastronomyByCountry;

export const getStaticPaths: GetStaticPaths = () => ({
  paths: countries.map((country) => ({ params: { country: country.name.toLowerCase() } })),
  fallback: false,
});

export const getStaticProps = async (context: GetStaticPropsContext<{ country: string }>) => {
  const country: string | undefined = context.params?.country.toUpperCase();

  const response: Response = await fetch(`${BaseURL}/filter.php?a=${country}`);

  const data: ApiResponse[] = await response
    .json()
    .then((response) => response.meals)
    .catch((e) => console.log(e));

  const recipes: Recipes[] = data.map((recipe: Object) => mapRecipeForCards(recipe));

  return { props: { recipes } };
};
