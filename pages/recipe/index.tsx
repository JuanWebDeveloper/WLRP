import { Fragment } from 'react';
import { GetServerSidePropsContext } from 'next';
// Import components of the page
import { Details } from '@/views/components/Recipe/Details';
import { Slider } from '@/views/components/Recipe/Slider';
import { Instructions } from '@/views/components/Recipe/Instructions';
// Interface
import { Recipes } from '@/core/models/Recipes';
import { ParsedUrlQuery } from 'querystring';
// Mapper
import { mapRecipe } from '@/core/mappers/mapperRecipesData';
// Utils
import { BaseURL } from '@/core/utils/baseURL';
// Head
import { MyHead } from '@/views/components/shared/Head';

const Recipe = (props: any) => {
  const recipes: Recipes = props.recipes;

  return (
    <Fragment>
      <MyHead titleName={recipes.name} />
      <div className='recipe'>
        <div className='recipe-content'>
          <Details recipes={recipes} />
          <Slider recipes={recipes} />
          <Instructions recipes={recipes} />
        </div>
      </div>
    </Fragment>
  );
};

export default Recipe;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { ir }: ParsedUrlQuery = context.query;

  if (!ir) {
    return { notFound: true };
  }

  const response: Response = await fetch(`${BaseURL}/lookup.php?i=${ir}`)
    .then((response) => response.json())
    .then((data) => data.meals[0])
    .catch((e) => console.log(e));

  const recipes: Recipes = mapRecipe(response);

  return {
    props: { recipes },
  };
};
