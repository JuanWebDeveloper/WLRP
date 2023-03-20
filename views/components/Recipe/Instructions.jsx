import { Fragment } from 'react';
// Component to display videos
import YouTube from 'react-youtube';

export const Instructions = () => {
  const videoUrl = 'https://www.youtube.com/watch?v=YsJXZwE5pdY&ab_channel=HristijanKonesky';
  const videoId = videoUrl.match(/youtube\.com\/watch\?v=([^&]+)/)[1];

  return (
    <Fragment>
      <div className='recipe-instructions'>
        <h2>Recipe</h2>
        <p>
          Fry the finely chopped onions and minced meat in oil. Add the salt and pepper. Grease a round baking tray and put a
          layer of pastry in it. Cover with a thin layer of filling and cover this with another layer of filo pastry which must be
          well coated in oil. Put another layer of filling and cover with pastry. When you have five or six layers, cover with
          filo pastry, bake at 200ºC/392ºF for half an hour and cut in quarters and serve
        </p>
      </div>
      <div className='video-recipe'>
        <h2>Video Of The Recipe Preparation</h2>
        <YouTube videoId={videoId} />
      </div>
    </Fragment>
  );
};
