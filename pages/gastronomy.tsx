import { useState } from 'react';
// Interface
import { Recipes } from '@/core/models/Recipes';
// Mapper
import { mapRecipeByCountry } from '@/core/mappers/mapperRecipesData';
// Components of the page
import { CountriesFilter } from '@/views/components/Gastronomy/CountriesFilter';
import { ViewOptions } from '@/views/components/shared/ViewOptions';
import { Card } from '../views/components/shared/Card';

const GastronomyByCountry = (props: any) => {
  const { recipes }: any = props;
  const [grid, setGrid] = useState('fourParts');
  const [cardsContent, setCardsContent] = useState(recipes);
  const [noRecipe, setNoRecipe] = useState({ search: '', noRecipe: false });
  const [loading, setLoading] = useState(false);

  return (
    <div className='gastronomy-country'>
      <div className='content'>
        <CountriesFilter />
        <ViewOptions
          grid={grid}
          setGrid={setGrid}
          setCardsContent={setCardsContent}
          setNoRecipe={setNoRecipe}
          setLoading={setLoading}
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

export async function getServerSideProps(context: any) {
  const { country }: any = context.query;

  const response: Response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`);

  const data: any = await response
    .json()
    .then((response) => response.meals)
    .catch((e) => console.log(e));
  const recipes: Recipes[] = data?.map((recipe: Object) => mapRecipeByCountry(recipe));
  return {
    props: { country, recipes },
  };
}
