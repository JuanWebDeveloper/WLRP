import { useState } from 'react';
import Image from 'next/image';

export const Slider = ({ recipes }: any) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => setActiveIndex(activeIndex === 0 ? recipes.ingredients.length - 1 : activeIndex - 1);
  const handleNext = () => setActiveIndex(activeIndex === recipes.ingredients.length - 1 ? 0 : activeIndex + 1);

  return (
    <div className='ingredients-slider'>
      <h2>Ingredients And Measures</h2>
      <div className='slider-content'>
        {recipes.ingredients.map((slide: string, index: number) => (
          <div key={index} className={`ingredient ${activeIndex === index ? 'active' : ''}`}>
            <h2>{slide}</h2>
            <div className='ingredient-content'>
              <div className='ingredient-image'>
                <Image src={recipes.ingredientsImages[index]} alt={slide} width={100} height={100} loading='eager' />
              </div>
              <div className='ingredient-measure'>
                <span className='span-t'>{recipes.measures[index]}</span>
              </div>
            </div>
          </div>
        ))}

        <div className='slider-controls'>
          <button className='prev' onClick={handlePrev}>
            <i className='fas fa-arrow-left'></i>
          </button>
          <button className='next' onClick={handleNext}>
            <i className='fas fa-arrow-right'></i>
          </button>
        </div>
      </div>
    </div>
  );
};
