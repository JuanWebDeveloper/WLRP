import Image from 'next/image';

export const Slider = ({ recipes }: any) => {
  return (
    <div className='ingredients-slider'>
      <h2>Ingredients And Measures</h2>
      <div className='slider-content'>
        {recipes.ingredients.map((slide: any, index: any) => (
          <div key={index} className={`ingredient ${index === 0 && 'active'}`}>
            <h2>{slide}</h2>
            <div className='ingredient-content'>
              <div className='ingredient-image'>
                <Image src={recipes.ingredientsImages[index]} alt={slide} width={100} height={100} />
              </div>
              <div className='ingredient-measure'>
                <span className='span-t'>{recipes.measures[index]}</span>
              </div>
            </div>
          </div>
        ))}

        <div className='slider-controls'>
          <button className='prev'>
            <i className='fas fa-arrow-left'></i>
          </button>
          <button className='next'>
            <i className='fas fa-arrow-right'></i>
          </button>
        </div>
      </div>
    </div>
  );
};
