import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { countries } from '@/core/utils/countries';

export const Navbar = () => {
  const [onScroll, setOnScroll] = useState(false);
  const [countrie, setCountrie] = useState('');

  useEffect(() => {
    setCountrie(countries[Math.floor(Math.random() * countries.length)].name);

    const detectScroll = () => (window.scrollY >= 40 ? setOnScroll(true) : setOnScroll(false));
    detectScroll();
    window.addEventListener('scroll', () => detectScroll());
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
          <Link href={`/gastronomy?country=${countrie}`}>Gastronomy by country</Link>
        </li>
        <li>
          <Link href='/faqs'>FAQ&apos;S</Link>
        </li>
        <li>
          <Link href='/contact'>Any problem? contact us</Link>
        </li>
      </ul>
    </div>
  );
};
