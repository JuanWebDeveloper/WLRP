import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import countries from '@/core/utils/countries';

export const Navbar = () => {
  const [onScroll, setOnScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 40) {
        setOnScroll(true);
      } else {
        setOnScroll(false);
      }
    });
  }, []);

  const toggleNavigation = () => {
    const navbar = document.querySelector('.navbar');
    const bars = document.querySelector('.bars');
    const navigation = document.querySelector('.navigation');

    if (navigation?.classList.contains('active')) {
      if (window.scrollY < 40) {
        navbar?.classList.remove('active');
        setOnScroll(false);
      }
      bars?.classList.remove('active');
      navigation?.classList.remove('active');
    } else {
      navbar?.classList.add('active');
      setOnScroll(true);
      bars?.classList.add('active');
      navigation?.classList.add('active');
    }
  };
  return (
    <div className={`navbar ${onScroll && 'active'}`}>
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
          <Link href={`/gastronomy?country=${countries[Math.floor(Math.random() * countries.length)].name}`}>
            Gastronomy by country
          </Link>
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
