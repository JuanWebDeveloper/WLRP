import { useForm } from '@/core/hooks/useForm';
import { Recipes } from '../../../core/models/Recipes';

export const ViewOptions = ({ grid, setGrid, setCardsContent, setNoRecipe }: any) => {
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

    await fetch(`/api/search?q=${search}`)
      .then((res: Response) => res.json())
      .then((response: Recipes[]) => setCardsContent(response))
      .catch((e) => {
        console.error(e);
        setCardsContent([]);
        setNoRecipe(search);
      });
  };

  return (
    <div className='view-options' onSubmit={handleTheSearch}>
      <div className='content'>
        <div className='grids'>
          <div className={`grid-item ${grid === 'fourParts' && 'active'}`} onClick={() => onChangeGrid('fourParts')}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={`grid-item ${grid === 'threeParts' && 'active'}`} onClick={() => onChangeGrid('threeParts')}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={`grid-item ${grid === 'twoParts' && 'active'}`} onClick={() => onChangeGrid('twoParts')}>
            <div></div>
            <div></div>
          </div>
        </div>

        <form className='search'>
          <input
            type='text'
            placeholder='Search recipes (English only)'
            name='search'
            onFocus={() => searchScale(true)}
            onBlur={() => searchScale(false)}
            value={search}
            onChange={handleInputChange}
          />
          <button className='button-color'>
            <i className='fa-solid fa-magnifying-glass'></i>
          </button>
        </form>
        <div className='search-filter'></div>
      </div>
    </div>
  );
};
