// Import components of the page
import { Header } from '@/views/components/Home/Header';
import { ViewOptions } from '@/views/components/Home/ViewOptions';
import { useState } from 'react';

const Home = () => {
  const [grid, setGrid] = useState('fourParts');

  return (
    <div className='home'>
      <div className='content'>
        <Header />
        <ViewOptions grid={grid} setGrid={setGrid} />

        <div className={`reset ${grid}`}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
