import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
        <Link href='/'>
          <Image
            src={onScroll ? '/image/logo-dark.svg' : '/image/logo-white.svg'}
            alt={'WLRP application logo'}
            width={679}
            height={195}
          />
        </Link>
      </div>

      <div className='bars' onClick={toggleNavigation}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>

      <ul className='navigation'>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/'>Gastronomy by country</Link>
        </li>
        <li>
          <Link href='/'>FAQ&apos;S</Link>
        </li>
        <li>
          <Link href='/'>Any problem? contact us</Link>
        </li>
      </ul>
    </div>
  );
};
