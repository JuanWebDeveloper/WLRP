import { useEffect, useState } from 'react';
import Image from 'next/image';

export const Navbar = () => {
  const [onScroll, setOnScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar');

      if (window.scrollY >= 40) {
        navbar?.classList.add('active');
        setOnScroll(true);
      } else {
        navbar?.classList.remove('active');
        setOnScroll(false);
      }
    });
  }, []);

  const toggleNavigation = () => {
    const bars = document.querySelector('.bars');
    const navigation = document.querySelector('.navigation');

    if (navigation?.classList.contains('active')) {
      bars?.classList.remove('active');
      navigation?.classList.remove('active');
    } else {
      bars?.classList.add('active');
      navigation?.classList.add('active');
    }
  };
  return (
    <div className='navbar'>
      <div className='logo'>
        <Image
          src={onScroll ? '/logo-dark.svg' : '/logo-white.svg'}
          alt={'WLRP application logo'}
          width={679}
          height={195}
        />
      </div>

      <div className='bars' onClick={toggleNavigation}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>

      <ul className='navigation'>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Gastronomy by country</a>
        </li>
        <li>
          <a>FAQ&apos;S</a>
        </li>
        <li>
          <a>Any problem? contact us</a>
        </li>
        <li>
          <a>Sign in</a>
        </li>
      </ul>
    </div>
  );
};
