import Image from 'next/image';

export const Card = () => {
  return (
    <div className='card'>
      <div className='content'>
        <h3>Name of the dishs</h3>
        <div className='dish-image'>
          <Image src={'/header.png'} alt={'Image of the dist'} width={'976'} height={'549'} />
        </div>
        <div className='card-footer'>
          <h3>Do you like it?</h3>
          <button className='button-color'>Learn How To Do It</button>
        </div>
      </div>
    </div>
  );
};
