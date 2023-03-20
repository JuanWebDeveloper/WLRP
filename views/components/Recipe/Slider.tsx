import Image from 'next/image';

export const Slider = () => {
  return (
    <div className='ingredients-slider'>
      <h2>Ingredients And Measures</h2>
      <div className='slider-content'>
        <div className='ingredient active'>
          <h2>Ingredien Name</h2>
          <div className='ingredient-content'>
            <div className='ingredient-image'>
              <Image
                src={'https://www.themealdb.com/images/ingredients/digestive biscuits.png'}
                alt={'Digestive biscuits'}
                width={200}
                height={200}
              />
            </div>
            <div className='ingredient-measure'>
              <span className='span-t'>175g/6oz</span>
            </div>
          </div>
        </div>
        <div className='ingredient'>
          <div className='ingredient-content'>
            <div className='ingredient-image'>
              <Image src={'https://www.themealdb.com/images/ingredients/butter.png'} alt={'butter'} width={200} height={200} />
            </div>
            <div className='ingredient-measure'>
              <span className='span-t'>75g/3oz</span>
            </div>
          </div>
          <h2>Ingredien Name</h2>
          <div className='ingredient'>
            <div className='ingredient-image'>
              <Image
                src={'https://www.themealdb.com/images/ingredients/bramley apples.png'}
                alt={'Bramley apples'}
                width={200}
                height={200}
              />
            </div>
            <div className='ingredient-measure'>
              <span className='span-t'>200g/7oz</span>
            </div>
          </div>
        </div>
        <div className='ingredient'>
          <h2>Ingredien Name</h2>
          <div className='ingredient-content'>
            <div className='ingredient-image'>
              <Image
                src={'https://www.themealdb.com/images/ingredients/butter, softened.png'}
                alt={'Butter, Softened'}
                width={200}
                height={200}
              />
            </div>
            <div className='ingredient-measure'>
              <span className='span-t'>75g/3oz</span>
            </div>
          </div>
        </div>
        <div className='ingredient'>
          <h2>Ingredien Name</h2>
          <div className='ingredient-content'>
            <div className='ingredient-image'>
              <Image
                src={'https://www.themealdb.com/images/ingredients/caster sugar.png'}
                alt={'caster sugar'}
                width={200}
                height={200}
              />
            </div>
            <div className='ingredient-measure'>
              <span className='span-t'>75g/3oz</span>
            </div>
          </div>
        </div>
        <div className='ingredient'>
          <h2>Ingredien Name</h2>
          <div className='ingredient-content'>
            <div className='ingredient-image'>
              <Image
                src={'https://www.themealdb.com/images/ingredients/free-range eggs, beaten.png'}
                alt={'free-range eggs, beaten'}
                width={200}
                height={200}
              />
            </div>
            <div className='ingredient-measure'>
              <span className='span-t'>2</span>
            </div>
          </div>
        </div>
        <div className='ingredient'>
          <h2>Ingredien Name</h2>
          <div className='ingredient-content'>
            <div className='ingredient-image'>
              <Image
                src={'https://www.themealdb.com/images/ingredients/ground almonds.png'}
                alt={'ground almonds'}
                width={200}
                height={200}
              />
            </div>
            <div className='ingredient-measure'>
              <span className='span-t'>75g/3oz</span>
            </div>
          </div>
        </div>
        <div className='ingredient'>
          <h2>Ingredien Name</h2>
          <div className='ingredient-content'>
            <div className='ingredient-image'>
              <Image
                src={'https://www.themealdb.com/images/ingredients/almond extract.png'}
                alt={'almond extract'}
                width={200}
                height={200}
              />
            </div>
            <div className='ingredient-measure'>
              <span className='span-t'>1 tsp</span>
            </div>
          </div>
        </div>
        <div className='ingredient'>
          <h2>Ingredien Name</h2>
          <div className='ingredient-content'>
            <div className='ingredient-image'>
              <Image
                src={'https://www.themealdb.com/images/ingredients/flaked almonds.png'}
                alt={'flaked almonds'}
                width={200}
                height={200}
              />
            </div>
            <div className='ingredient-measure'>
              <span className='span-t'>50g/1¾oz</span>
            </div>
          </div>
        </div>
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
