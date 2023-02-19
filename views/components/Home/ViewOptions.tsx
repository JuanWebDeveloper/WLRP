export const ViewOptions = ({ grid, setGrid }: any) => {
  const onChangeGrid = (gridText: string) => {
    setGrid(gridText);
  };

  const searchScale = (focus: boolean) => {
    const search = document.querySelector('.search');

    if (focus) {
      search?.classList.add('scale');
    } else {
      search?.classList.remove('scale');
    }
  };

  return (
    <div className='view-options'>
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
            placeholder='Search for a meal'
            onFocus={() => searchScale(true)}
            onBlur={() => searchScale(false)}
          />
          <button>
            <i className='fa-solid fa-magnifying-glass'></i>
          </button>
        </form>
      </div>
    </div>
  );
};
