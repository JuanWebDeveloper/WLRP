import { useState } from 'react';
import { Recipes } from '@/core/models/Recipes';
import { mapRecipeByCountry } from '@/core/mappers/mapperRecipesData';
import { CountriesFilter } from '@/views/components/Gastronomy/CountriesFilter';

const GastronomyByCountry = (props: any) => {
  const { country, recipes }: any = props;
  const [grid, setGrid] = useState('fourParts');
  const [cardsContent, setCardsContent] = useState(recipes);
  const [noRecipe, setNoRecipe] = useState({ search: '', noRecipe: false });
  const [loading, setLoading] = useState(false);

  return (
    <div className='gastronomy-country'>
      <div className='content'>
        <CountriesFilter />
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
