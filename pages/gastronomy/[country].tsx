import { useState, Fragment } from 'react';
import { GetStaticPropsContext, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
// Interface
import { Recipes } from '@/core/models/Recipes';
import { ApiResponse } from '@/core/models/ApiResponse';
// Mapper
import { mapRecipeForCards } from '@/core/mappers/mapperRecipesData';
// Utils
import { initialGrid } from '@/core/utils/initialGrid';
import { countries } from '@/core/utils/countries';
// Components of the page
import { CountriesFilter } from '@/views/components/Gastronomy/CountriesFilter';
import { ViewOptions } from '@/views/components/shared/ViewOptions';
import { Card } from '@/views/components/shared/Card';
// Head
import { MyHead } from '@/views/components/shared/Head';

const GastronomyByCountry = (props: { recipes: Recipes[] }) => {
  const recipes: Recipes[] = props.recipes;
  const [grid, setGrid] = useState(initialGrid(recipes.length));
  const [cardsContent, setCardsContent] = useState(recipes);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  let country: any = router.query.country;
  country = country.charAt(0).toUpperCase() + country.slice(1);

  return (
    <Fragment>
      <MyHead titleName={`Discover ${country} Gastronomy`} />
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
    </Fragment>
  );
};

export default GastronomyByCountry;

export const getStaticPaths: GetStaticPaths = () => ({
  paths: countries.map((country) => ({ params: { country: country.name.toLowerCase() } })),
  fallback: false,
});

export const getStaticProps = async (context: GetStaticPropsContext<{ country: string }>) => {
  const country: string | undefined = context.params?.country;

  const response: Response = await fetch(`${process.env.API_URL}/filter.php?a=${country}`);

  const data: ApiResponse[] = await response
    .json()
    .then((response) => response.meals)
    .catch((e) => console.log(e));

  const recipes: Recipes[] = data.map((recipe: Object) => mapRecipeForCards(recipe));

  return { props: { recipes } };
};
