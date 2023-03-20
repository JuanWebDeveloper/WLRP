// Import components of the page
import { Details } from '@/views/components/Recipe/Details';
import { Slider } from '@/views/components/Recipe/Slider';
import { Instructions } from '@/views/components/Recipe/Instructions';

const Recipe = () => {
  return (
    <div className='recipe'>
      <div className='recipe-content'>
        <Details />
        <Slider />
        <Instructions />
      </div>
    </div>
  );
};

export default Recipe;
