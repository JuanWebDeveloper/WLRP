import { Fragment } from 'react';
// Component to display videos
import YouTube from 'react-youtube';
import URLParse from 'url-parse';

export const Instructions = ({ recipes }: any) => {
  const videoUrl = recipes.video;
  const parsedUrl = new URLParse(videoUrl, true);
  const videoId = parsedUrl.query.v;

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
