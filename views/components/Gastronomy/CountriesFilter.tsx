import Link from 'next/link';
import Image from 'next/image';
import { countries } from '@/core/utils/countries';

export const CountriesFilter = () => {
  return (
    <div className='countries-filter'>
      <h2>Choose Country To Filter The Recipes</h2>
      <div className='countries'>
        {countries.map((country: any) => (
          <div key={country.name}>
            <Link href={`gastronomy/?country=${country.name}`}>
              <Image src={country.image} alt={country.name} height={50} width={100} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
