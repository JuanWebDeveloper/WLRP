import Image from 'next/image';
// Component to display videos
import YouTube from 'react-youtube';

const Recipe = () => {
  const videoUrl: any = 'https://www.youtube.com/watch?v=YsJXZwE5pdY&ab_channel=HristijanKonesky';
  const videoId = videoUrl.match(/youtube\.com\/watch\?v=([^&]+)/)[1];

  return (
    <div className='recipe'>
      <div className='content'>
        <div className='recipe-details'>
          <div className='recipe-image'>
            <Image
              src={'https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg'}
              alt={'Apple & Blackberry Crumble'}
              width={200}
              height={200}
            />
          </div>
          <div className='details'>
            <h2>Apple & Blackberry Crumble</h2>
            <h3>
              <span>Category:</span> Dessert
            </h3>
            <h3>
              <span>Origin:</span> British
            </h3>
            <div className='recipe-tags'>
              <h3>Tags</h3>
              <div className='tags'>
                <span className='span-t'>Pudding</span>
                <span className='span-t'>Pudding</span>
                <span className='span-t'>Pudding</span>
              </div>
            </div>
          </div>
        </div>
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
                  <Image
                    src={'https://www.themealdb.com/images/ingredients/butter.png'}
                    alt={'butter'}
                    width={200}
                    height={200}
                  />
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
        <div className='recipe-instructions'>
          <h2>Recipe</h2>
          <p>
            Fry the finely chopped onions and minced meat in oil. Add the salt and pepper. Grease a round baking tray and put a
            layer of pastry in it. Cover with a thin layer of filling and cover this with another layer of filo pastry which must
            be well coated in oil. Put another layer of filling and cover with pastry. When you have five or six layers, cover
            with filo pastry, bake at 200ºC/392ºF for half an hour and cut in quarters and serve
          </p>
        </div>
        <div className='video-recipe'>
          <h2>Video Of The Recipe Preparation</h2>
          <YouTube videoId={videoId} />
        </div>
      </div>
    </div>
  );
};

export default Recipe;
