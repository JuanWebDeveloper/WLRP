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
            <h3>Category: Dessert</h3>
            <h3>Origin: British</h3>
            <div className='recipe-tags'>
              <span>Pudding</span>
              <span>Pudding</span>
              <span>Pudding</span>
            </div>
          </div>
        </div>
        <div className='ingredients-slider'>
          <h2>Ingredients and measures</h2>
          <div className='slider-content'>
            <div className='ingredient'>
              <div className='ingredient-image'>
                <Image
                  src={'https://www.themealdb.com/images/ingredients/digestive biscuits.png'}
                  alt={'Digestive biscuits'}
                  width={200}
                  height={200}
                />
              </div>
              <div className='ingredient-measure'>
                <h3>175g/6oz</h3>
              </div>
            </div>
            <div className='ingredient'>
              <div className='ingredient-image'>
                <Image src={'https://www.themealdb.com/images/ingredients/butter.png'} alt={'butter'} width={200} height={200} />
              </div>
              <div className='ingredient-measure'>
                <h3>75g/3oz</h3>
              </div>
            </div>
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
                <h3>200g/7oz</h3>
              </div>
            </div>
            <div className='ingredient'>
              <div className='ingredient-image'>
                <Image
                  src={'https://www.themealdb.com/images/ingredients/butter, softened.png'}
                  alt={'Butter, Softened'}
                  width={200}
                  height={200}
                />
              </div>
              <div className='ingredient-measure'>
                <h3>75g/3oz</h3>
              </div>
            </div>
            <div className='ingredient'>
              <div className='ingredient-image'>
                <Image
                  src={'https://www.themealdb.com/images/ingredients/caster sugar.png'}
                  alt={'caster sugar'}
                  width={200}
                  height={200}
                />
              </div>
              <div className='ingredient-measure'>
                <h3>75g/3oz</h3>
              </div>
            </div>
            <div className='ingredient'>
              <div className='ingredient-image'>
                <Image
                  src={'https://www.themealdb.com/images/ingredients/free-range eggs, beaten.png'}
                  alt={'free-range eggs, beaten'}
                  width={200}
                  height={200}
                />
              </div>
              <div className='ingredient-measure'>
                <h3>2</h3>
              </div>
            </div>
            <div className='ingredient'>
              <div className='ingredient-image'>
                <Image
                  src={'https://www.themealdb.com/images/ingredients/ground almonds.png'}
                  alt={'ground almonds'}
                  width={200}
                  height={200}
                />
              </div>
              <div className='ingredient-measure'>
                <h3>75g/3oz</h3>
              </div>
            </div>
            <div className='ingredient'>
              <div className='ingredient-image'>
                <Image
                  src={'https://www.themealdb.com/images/ingredients/almond extract.png'}
                  alt={'almond extract'}
                  width={200}
                  height={200}
                />
              </div>
              <div className='ingredient-measure'>
                <h3>1 tsp</h3>
              </div>
            </div>
            <div className='ingredient'>
              <div className='ingredient-image'>
                <Image
                  src={'https://www.themealdb.com/images/ingredients/flaked almonds.png'}
                  alt={'flaked almonds'}
                  width={200}
                  height={200}
                />
              </div>
              <div className='ingredient-measure'>
                <h3>50g/1¾oz</h3>
              </div>
            </div>
          </div>
        </div>
        <div className='recipe-instructions'>
          <p>
            Fry the finely chopped onions and minced meat in oil. Add the salt and pepper. Grease a round baking tray and put a
            layer of pastry in it. Cover with a thin layer of filling and cover this with another layer of filo pastry which must
            be well coated in oil. Put another layer of filling and cover with pastry. When you have five or six layers, cover
            with filo pastry, bake at 200ºC/392ºF for half an hour and cut in quarters and serve
          </p>
        </div>
        <div className='video-recipe'>
          <YouTube videoId={videoId} />
        </div>
      </div>
    </div>
  );
};

export default Recipe;
