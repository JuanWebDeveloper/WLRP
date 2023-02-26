import Image from 'next/image';
// Interface of the necessary data for the recipes
import { Recipes } from '@/core/models/Recipes';

export const Card = (props: Recipes | any) => {
  const { recipe }: Recipes | any = props;

  return (
    <div className='card'>
      <div className='content'>
        <h3>{recipe.name.slice(0, 16) + (recipe.name.length > 16 ? '...' : '').replace(/\s*\(.*?\)\s*/g, '')}</h3>
        <div className='dish-image'>
          <Image src={recipe.image} alt={recipe.name} width={'976'} height={'549'} />
        </div>
        <div className='card-footer'>
          <h3>Do you like it?</h3>
          <button className='button-color'>Learn How To Do It</button>
        </div>
      </div>
    </div>
  );
};
