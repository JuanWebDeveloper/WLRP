import { useState } from 'react';
// Interface
import { Recipes } from '@/core/models/Recipes';
// Hook
import { useForm } from '@/core/hooks/useForm';
// Utils
import { initialGrid } from '@/core/utils/initialGrid';

export const ViewOptions = ({ grid, setGrid, setCardsContent, setNoRecipe, setLoading, recipeQuantity, style }: any) => {
  const [quantity, setQuantity] = useState(recipeQuantity);

  // Updates the grid state with the new gridText value to change the display of the recipe cards
  const onChangeGrid = (gridText: string) => {
    setGrid(gridText);
  };

  const { formValues, handleInputChange } = useForm({
    search: '',
  });

  const { search }: any = formValues;

  // Changes the CSS class of the search element based on the focus value
  const searchScale = (focus: boolean) => {
    // Selects the search element.
    const search = document.querySelector('.search');

    // Adds or removes the "scale" class based on the focus value
    if (focus) {
      search?.classList.add('scale');
    } else {
      search?.classList.remove('scale');
    }
  };

  // This function fetches search results from the backend API and updates the card content with the response
  const handleTheSearch = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    await fetch(`/api/search?q=${search}`)
      .then((res: Response) => res.json())
      .then((response: Recipes[]) => {
        setCardsContent(response);
        setQuantity(response.length);
        setGrid(initialGrid(response.length));
        setNoRecipe({ search: '', noRecipe: false });
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setCardsContent([]);
        setQuantity(0);
        setNoRecipe({ search, noRecipe: true });
        setLoading(false);
      });
  };

  return (
    <div className='view-options' onSubmit={handleTheSearch}>
      <div className='content-options'>
        <div className={`grids ${quantity <= 1 && 'none'}`}>
          {quantity >= 4 && (
            <div className={`grid-item ${grid === 'fourParts' && 'active'}`} onClick={() => onChangeGrid('fourParts')}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
          {quantity >= 3 && (
            <div className={`grid-item ${grid === 'threeParts' && 'active'}`} onClick={() => onChangeGrid('threeParts')}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
          {quantity >= 2 && (
            <div className={`grid-item ${grid === 'twoParts' && 'active'}`} onClick={() => onChangeGrid('twoParts')}>
              <div></div>
              <div></div>
            </div>
          )}
        </div>

        <form style={style} className='search'>
          <input
            type='text'
            placeholder='Search recipes (English only)'
            name='search'
            onFocus={() => searchScale(true)}
            onBlur={() => searchScale(false)}
            value={search}
            onChange={handleInputChange}
          />
          <button className={`button-default ${search.length < 1 && 'none'}`}>
            <i className='fa-solid fa-magnifying-glass'></i>
          </button>
        </form>
        <div className='search-filter'></div>
      </div>
    </div>
  );
};
