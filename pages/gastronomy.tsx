import { countries } from '@/core/utils/countries';
import Image from 'next/image';
import Link from 'next/link';

const GastronomyByCountry = () => {
  return (
    <div className='gastronomy-country'>
      <div className='content'>
        <div className='filter-countries'>
          {countries.map((country: any) => (
            <div key={country.name}>
              <Link href={`gastronomy/?country=${country.name}`}>
                <Image src={country.image} alt={country.name} height={50} width={100} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GastronomyByCountry;

export async function getServerSideProps(context: any) {
  const { country }: any = context.query;
  return {
    props: { country },
  };
}
