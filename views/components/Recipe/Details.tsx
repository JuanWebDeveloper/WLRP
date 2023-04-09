import Image from 'next/image';

export const Details = ({ recipes }: any) => {
  return (
    <div className='recipe-details'>
      <div className='recipe-image'>
        <Image src={recipes.image} alt={recipes.name} width={200} height={200} />
      </div>
      <div className='details'>
        <h2>{recipes.name}</h2>
        <h3>
          <span>Category:</span> {recipes.category}
        </h3>
        <h3>
          <span>Origin:</span> {recipes.countryOrigin}
        </h3>
      </div>
    </div>
  );
};
