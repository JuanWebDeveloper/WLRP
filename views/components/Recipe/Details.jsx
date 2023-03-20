import Image from 'next/image';

export const Details = () => {
  return (
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
        <h2>Apple & Blackberry Crumble </h2>
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
  );
};
