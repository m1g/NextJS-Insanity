import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';

import { type Hero } from "~/lib/sanity.queries";

import styles from '../styles/jsStyles'

export default function HeroSection({heroes}: {heroes: Hero[]}){
  const currentHero = heroes[0]
  
  return (
    <section id="home" className={`hero flex md:flex-row flex-col ${styles.paddingY}  ${styles.flexCenter} mt-[67px] lg:mt-[73px]`}>
      <div className={`flex-1 ${styles.flexStart} flex-col sm:px-16 px-6 pt-6 pb-6`}>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          {currentHero.event}
        </h1>
        <span className={`${styles.paragraph} max-w-[470px] mt-5 mb-5`}>
          <PortableText value={currentHero.content} />
        </span>
        <div className="ss:flex md:mr-4 mr-0">
          <Link href={currentHero.slug} target='_blank'>
            <button className="hover:shadow-lg focus:outline-none px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none">
              Get Registered
            </button>
          </Link>
          
        </div>
      </div>

      <div className={`flex-1 flex justify-center md:justify-end md:mb-0 md:mt-0 mt-10 mb-0 relative`}>
        <Image 
          className="image w-[90%] h-[90%] relative"
          src={currentHero.image} 
          // @ts-ignore
          alt={currentHero.event}
          width={750}
          height={300}
        />
      </div>
    </section>
  );
};
