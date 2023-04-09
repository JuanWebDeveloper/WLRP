import { Fragment } from 'react';
// Component to display videos
import YouTube from 'react-youtube';

export const Instructions = ({ recipes }: any) => {
  const videoUrl: any = recipes.video;
  const videoId = videoUrl.match(/youtube\.com\/watch\?v=([^&]+)/)[1];

  return (
    <Fragment>
      <div className='recipe-instructions'>
        <h2>Recipe</h2>
        <p>{recipes.instructions}</p>
      </div>
      <div className='video-recipe'>
        <h2>Video Of The Recipe Preparation</h2>
        <YouTube videoId={videoId} />
      </div>
    </Fragment>
  );
};
