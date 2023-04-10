import Image from 'next/image';
import notFound from '../public/image/404.png';

const NotFound = () => {
  return (
    <div className='not-found'>
      <div className='not-found_image'>
        <Image src={notFound} alt={'Not Found Image'} width={'976'} height={'549'} />
      </div>
      <div className='not-found_text'>
        <h2>Uh oh! The page you&apos;re looking for can&apos;t be found.</h2>
        <h3>Whoops! We couldn&apos;t find the page you were looking for. You seem to have taken a wrong turn.</h3>
      </div>
    </div>
  );
};

export default NotFound;
